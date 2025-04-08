import { toast } from "sonner";
import * as dayjs from 'dayjs'

const handleAccountSuccessfulCreation = () => {
  const toastMessage = "Account has been created.";

  toast.success(toastMessage, {
    
  });
};

const handleDuringSignUpErrorMessage = () => {
  const toastMessage = "Error during signup";

  toast.error(toastMessage, {
    
  });
};

const handlePasswordLengthMessage = () => {
  const toastMessage = "Password should be at least 6 characters long.";

  toast.error(toastMessage, {
    
  });
};

const handlePasswordMatchMessage = () => {
  const toastMessage = "Passwords do not match.";

  toast.error(toastMessage, {
    
  });
};

const handleEmailAlreadyInUseMessage = () => {
  const toastMessage = "Email already in use.";

  toast.error(toastMessage, {
    
  });
};

const handleSentEmailMessage = () => {
  const toastMessage = "Sent Email";

  toast.success(toastMessage, {
    
  });
};

const handleResetErrorMessage = () => {
  const toastMessage = "User with this email not found.";

  toast.error(toastMessage, {
    
  });
};

const handleEmptyFieldErrorMessage = () => {
  const toastMessage = "Please fill all fields.";

  toast.error(toastMessage, {
    
  });
};

const handleDuringLoginErrorMessage = () => {
  const toastMessage = "Error during login";

  toast.error(toastMessage, {
    
  });
};

const handleSuccessfulLoginMessage = () => {
  const toastMessage = "You have successfully logged in.";

  toast.success(toastMessage, {
    
  });
};

const handleLoginErrorMessage = () => {
  const toastMessage = "Wrong email or password. Try again.";

  toast.error(toastMessage, {
    
  });
};

const handleLogoutMessage = () => {
  const toastMessage = "You have been successfully logged out.";

  toast.success(toastMessage, {
    
  });
};

const handleLoginMessage = () => {
  const toastMessage = "You must log in first.";

  toast.info(toastMessage, {
    
  });
};

const successfullVerifyMessage = () => {
  const toastMessage = "Your password has been verified.";

  toast.success(toastMessage, {
    
  });
};

const errorVerifyMessage = () => {
  const toastMessage = "Error during password verification. Try again.";

  toast.error(toastMessage, {
    
  });
};

const successfulPasswordUpdateMessage = () => {
  const toastMessage = "Your password has been successfully updated.";

  toast.success(toastMessage, {
    
  });
};

const errorPasswordUpdateMessage = () => {
  const toastMessage = "Error during password update. Try again.";

  toast.error(toastMessage, {
    
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
