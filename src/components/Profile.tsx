import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useEffect, useState, useCallback } from "react";
import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Loader from "./Loader";

const storage = getStorage();

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedName, setDisplayedName] = useState("");

  const fetchUserData = useCallback(async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        setDisplayName(userDoc.data().displayName || "");
        setBio(userDoc.data().bio || "");
        setProfilePicture(userDoc.data().profilePicture || "");
        setDisplayedName(userDoc.data().displayName || "");
      }
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleUpdate = async () => {
    setIsLoading(true);
    const user = auth.currentUser;
    if (!user) return;
    const userRef = doc(firestore, "users", user.uid);

    if (image) {
      if (
        image.type !== "image/jpeg" &&
        image.type !== "image/png" &&
        image.type !== "image/gif"
      ) {
        alert("Image must be JPEG, PNG or GIF");
        setIsLoading(false);
        return;
      }
      if (image.size > 10 * 1024 * 1024) {
        alert("Image size must be less than 10MB");
        setIsLoading(false);
        return;
      }

      const storageRef = ref(storage, `user_images/${user.uid}/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            await updateDoc(userRef, {
              profilePicture: downloadURL,
              displayName: displayName,
              bio: bio,
            });

            setProfilePicture(downloadURL);

            setImage(null);

            setIsLoading(false);
          } catch (error) {
            console.error("Error updating document: ", error);
          }
        },
      );
    } else {
      await updateDoc(userRef, {
        displayName: displayName,
        bio: bio,
      });
      setIsLoading(false);
      fetchUserData();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Label className="text-xl">Profile picture</Label>
      <div className="flex items-center gap-10">
        <Avatar className="h-28 w-28 border-2 border-solid border-white ">
          <AvatarImage alt="usersProfilePicture" src={profilePicture} />
          <AvatarFallback>{displayedName}</AvatarFallback>
        </Avatar>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            className="h-fit rounded-md p-2 file:rounded-md file:bg-[#0b305e] file:text-white file:hover:bg-[#1357aa]"
            id="picture"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
          />

          <p className="text-xs">
            Picture must be JPEG, PNG or GIF and it can't be bigger than 10MB.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-7">
        <Label className="text-xl">Profile settings</Label>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="displayname">Display name</Label>
          <Input
            className="rounded-md"
            type="displayname"
            id="displayname"
            placeholder="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <textarea
            className="flex min-h-[60px] w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id="bio"
            placeholder="Tell us a little bit about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>
      <Button
        className="w-fit bg-[#0b305e] hover:bg-[#1357aa]"
        onClick={handleUpdate}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Update"}
      </Button>
    </div>
  );
};

export default Profile;
