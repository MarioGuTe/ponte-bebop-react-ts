import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

function useForm() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
    onSubmit: (values) => {
      emailjs.send(serviceID, templateID, values, apiKey);
    },
  });

  return formik;
}

export default useForm;
