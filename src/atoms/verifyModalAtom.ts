import { atom } from "recoil";

type VerifyModalState = {
  isOpen: boolean;
  type: "Verify" | "newPassword";
};

const initalVerifyModalState: VerifyModalState = {
  isOpen: false,
  type: "Verify",
};

export const verifyModalState = atom<VerifyModalState>({
  key: "verifyModalState",
  default: initalVerifyModalState,
});


export const isUserVerifiedState = atom({
  key: 'isUserVerifiedState',
  default: false,
});