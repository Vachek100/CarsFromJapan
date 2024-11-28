import { verifyModalState, isUserVerifiedState } from "@/atoms/verifyModalAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import VerifyModal from "./VerifyModal";
import NewPasswordModal from "./NewPasswordModal";
import { Label } from "../ui/label";

const PasswordChangeModals = () => {
  const setVerifyModalState = useSetRecoilState(verifyModalState);
  const setIsUserVerified = useSetRecoilState(isUserVerifiedState); 
  const isUserVerified = useRecoilValue(isUserVerifiedState);

  const handleClick = (type: "Verify" | "newPassword") => {
    setVerifyModalState((prev) => ({ ...prev, type }));
    setIsUserVerified(false); 
  };

  const verifyModal = useRecoilValue(verifyModalState);

  return (
    <Dialog>
      <DialogTrigger onClick={() => handleClick("Verify")}>
        <Label className="cursor-pointer text-[#e95759] hover:text-[#b54345]">
          Change password
        </Label>
      </DialogTrigger>
      <DialogContent>
        {isUserVerified ? (
          <NewPasswordModal />
        ) : verifyModal.type === "Verify" ? (
          <VerifyModal />
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChangeModals;
