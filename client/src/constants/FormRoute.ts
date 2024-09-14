import { Forms } from "./Forms";
import Form from "../components/dashboard/forms/Form";

export const FormRoute = Forms.map((form) => {
  return {
    title: form.name,
    path: "/form/:form_name/client/:client_id/details/:form_id",
    Element: Form,
  };
});
