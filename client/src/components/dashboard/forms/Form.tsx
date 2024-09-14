import React from "react";
import { useParams } from "react-router-dom";
import FL144 from "../../pdf/fl144/FL144";
import axios from "axios";
import { API_URL } from "../../../constants/data";

export default function Form() {
  const { client_id, form_id, form_name } = useParams();
  const [form, setForm] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);
  const getFormData = React.useRef(() => {});

  getFormData.current = async () => {
    try {
      const params = new URLSearchParams();
      params.append("client_id", client_id || "");
      params.append("form_id", form_id || "");
      params.append("form_name", form_name || "");

      const data = await axios
        .get(API_URL + "/form/data?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });

      setForm(data);
      setLoading(false);
    } catch (err) {}
  };

  React.useEffect(() => {
    getFormData.current();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  switch (form_name) {
    case "1034":
      return <div>1034</div>;
    case "fl100":
      return <div>fl100</div>;
    case "fl105":
      return <div>fl105</div>;
    case "fl107info":
      return <div>fl107info</div>;
    case "fl110":
      return <div>fl110</div>;
    case "fl115":
      return <div>fl115</div>;
    case "fl117":
      return <div>fl117</div>;
    case "fl120":
      return <div>fl120</div>;
    case "fl130":
      return <div>fl130</div>;
    case "fl130a":
      return <div>fl130a</div>;
    case "fl140":
      return <div>fl140</div>;
    case "fl141":
      return <div>fl141</div>;
    case "fl144":
      return <FL144 />;
    default:
      return <div>Invalid Form</div>;
  }
}
