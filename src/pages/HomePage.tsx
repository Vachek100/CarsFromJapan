import Container from "@/components/ui/container";
import { firestore } from "@/firebase/firebase";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        price: "",
        imgURL: "",
        year: "",
        km: "",
        grade: "",
        engine: "",
        route: "",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUploading(true);

        try {
            let imgURL = inputs.imgURL;

            // Convert image to base64 if provided
            if (imageFile) {
                imgURL = await convertImageToBase64(imageFile);
            }

            // First add the document to get the auto-generated ID
            const docRef = await addDoc(collection(firestore, "cars"), {
                ...inputs,
                price: Number(inputs.price),
                year: Number(inputs.year),
                imgURL,
                createdAt: new Date()
            });

            // Now update the document to set the route to the ID
            await updateDoc(docRef, {
                route: docRef.id
            });

            alert(`Car saved to database with ID: ${docRef.id}`);

            // Reset form
            setInputs({
                name: "",
                price: "",
                imgURL: "",
                year: "",
                km: "",
                grade: "",
                engine: "",
                route: "",
            });
            setImageFile(null);
        } catch (error) {
            console.error("Error saving car:", error);
            alert("Error saving car. Please check console for details.");
        } finally {
            setIsUploading(false);
        }
    };

    const convertImageToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    return (
        <>
            <div className="h-auto w-full bg-white py-7 shadow-md">
                <Container>
                    <h1 className="text-[30px] font-bold">Add New Car</h1>
                </Container>
            </div>
            <Container>
                <form
                    className="flex max-w-sm flex-col gap-3 p-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car name"
                        name="name"
                        value={inputs.name}
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car price (number)"
                        name="price"
                        value={inputs.price}
                        required
                    />

                    <div className="flex flex-col">
                        <label className="mb-1">Car Image:</label>
                        <input
                            onChange={handleImageChange}
                            className="p-2"
                            type="file"
                            accept="image/*"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            {imageFile
                                ? `Selected: ${imageFile.name}`
                                : "Or enter image URL below"}
                        </p>
                    </div>

                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Or enter image URL"
                        name="imgURL"
                        value={inputs.imgURL}
                    />
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car year (number)"
                        name="year"
                        value={inputs.year}
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car km"
                        name="km"
                        value={inputs.km}
                    />
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car grade"
                        name="grade"
                        value={inputs.grade}
                    />
                    <input
                        onChange={handleInputChange}
                        className="border-2 border-pink-500 bg-gray-300 p-2"
                        type="text"
                        placeholder="Car engine"
                        name="engine"
                        value={inputs.engine}
                    />
                    {/* Removed the route input field since it's auto-generated */}
                    <button
                        className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 disabled:bg-pink-300"
                        disabled={isUploading}
                    >
                        {isUploading ? "Uploading..." : "Save to database"}
                    </button>
                </form>
            </Container>
        </>
    );
};

export default Home;
