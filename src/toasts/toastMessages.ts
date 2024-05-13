import { toast } from "sonner";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";

dayjs.extend(LocalizedFormat);

const handleAccountSuccessfulCreation = () => {
  const toastMessage = "Account has been created.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleDuringSignUpErrorMessage = () => {
  const toastMessage = "Error during signup";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handlePasswordLengthMessage = () => {
  const toastMessage = "Password should be at least 6 characters long.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handlePasswordMatchMessage = () => {
  const toastMessage = "Passwords do not match.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleEmailAlreadyInUseMessage = () => {
  const toastMessage = "Email already in use.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleSentEmailMessage = () => {
  const toastMessage = "Sent Email";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleResetErrorMessage = () => {
  const toastMessage = "User with this email not found.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleEmptyFieldErrorMessage = () => {
  const toastMessage = "Please fill all fields.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleDuringLoginErrorMessage = () => {
  const toastMessage = "Error during login";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleSuccessfulLoginMessage = () => {
  const toastMessage = "You have successfully logged in.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleLoginErrorMessage = () => {
  const toastMessage = "Wrong email or password. Try again.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleLogoutMessage = () => {
  const toastMessage = "You have been successfully logged out.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleLoginMessage = () => {
  const toastMessage = "You must log in first.";

  toast.info(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const successfullVerifyMessage = () => {
  const toastMessage = "Your password has been verified.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const errorVerifyMessage = () => {
  const toastMessage = "Error during password verification. Try again.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const successfulPasswordUpdateMessage = () => {
  const toastMessage = "Your password has been successfully updated.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const errorPasswordUpdateMessage = () => {
  const toastMessage = "Error during password update. Try again.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

export {
  handleAccountSuccessfulCreation,
  handleEmailAlreadyInUseMessage,
  handleEmptyFieldErrorMessage,
  handlePasswordLengthMessage,
  handlePasswordMatchMessage,
  handleResetErrorMessage,
  handleSentEmailMessage,
  handleSuccessfulLoginMessage,
  handleLoginErrorMessage,
  handleDuringLoginErrorMessage,
  handleDuringSignUpErrorMessage,
  handleLogoutMessage,
  handleLoginMessage,
  successfullVerifyMessage,
  errorVerifyMessage,
  successfulPasswordUpdateMessage,
  errorPasswordUpdateMessage,
};
