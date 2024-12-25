import { toast } from "react-toastify";

const useToast = (msg, status = null) => {
  if (!status) {
    toast.success(msg, {
      position: "top-right",
      autoCLose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  } else if (status === "error") {
    toast.error(msg, {
      position: "top-right",
      autoCLose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  }
};

export default useToast;
