import * as Yup from "yup";

export const schema = Yup.object().shape({
  message: Yup.string()
    .required("Message must be provided")
    .min(10, "Message must contain at least 10 characters")
    .max(500, "Message cannot be longer than 500 characters"),
});
