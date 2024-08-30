import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";

export const swAlert = (title, icon = "info", text = "") => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};
export const swError = (errors, type) => {
  if (typeof errors === "string") {
    Swal.fire({
      text: errors,
      icon: type,
      confirmButtonText: "Tamam",
    });
  } else if (typeof errors === "object") {
    const errorMessages = Object.values(errors).join("\n");
    Swal.fire({
      text: errorMessages,
      icon: type,
      confirmButtonText: "Tamam",
    });
  }
};





