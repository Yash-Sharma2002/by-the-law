import React from "react";
import { useParams } from "react-router-dom";
import FL144 from "../../pdf/fl144/FL144";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import FL1034 from "../../pdf/fl1034/fl1034";
import SU100 from "../../pdf/fl100/fl100";
import FL105 from "../../pdf/fl105/fl105";
import FL141 from "../../pdf/fl141/fl141";
import FL140 from "../../pdf/fl140/fl140";
import SU130a from "../../pdf/fl130A/fl130a";
import Fl130 from "../../pdf/fl130/fl130";
import SU110 from "../../pdf/fl110/fl110";
import SU115 from "../../pdf/fl115/fl115";
import SU117 from "../../pdf/fl117/fl117";
import FL120 from "../../pdf/fl120/fl120";
import FL142 from "../../pdf/fl142/fl142";
import FL145 from "../../pdf/fl145/fl145";
import FL190 from "../../pdf/fl190/fl190";
import Fl155 from "../../pdf/fl155/Fl155";
import Fl157 from "../../pdf/fl157/Fl157";
import Fl158 from "../../pdf/fl158/Fl158";
import FL160 from "../../pdf/fl160/Fl160";
import Fl170 from "../../pdf/fl170/Fl170";
import Fl182 from "../../pdf/fl182/Fl182";
import Fl191 from "../../pdf/fl191/Fl-191";
import FL330 from "../../pdf/Fl330/FL330";
import FL335 from "../../pdf/Fl335/FL335";
import FL800 from "../../pdf/Fl800/FL800";
import FW001Info from "../../pdf/Fw001info/FW001info";
import Fw002 from "../../pdf/Fw002/Fw002";
import Petition from "../../pdf/petition/Petition";
import Loading from "../../loader/Loading";
import Fl150 from "../../pdf/fl150/Fl150";

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
    return <Loading />;
  }

  switch (form_name) {
    case "fl100":
      return <SU100 />;
    case "fl105":
      return <FL105 />;
    case "fl110":
      return <SU110 />;
    case "fl115":
      return <SU115 />;
    case "fl117":
      return <SU117 />;
    case "fl120":
      return <FL120 />;
    case "fl130":
      return <Fl130 />;
    case "fl130a":
      return <SU130a />;
    case "fl140":
      return <FL140 />;
    case "fl141":
      return <FL141 />;
    case "fl142":
      return <FL142 />;
    case "fl144":
      return <FL144 />;
    case "fl145":
      return <FL145 />;
    case "fl150":
      return <Fl150 />;
    case "fl155":
      return <Fl155 />;
    case "fl157":
      return <Fl157 />;
    case "fl158":
      return <Fl158 />;
    case "fl160":
      return <FL160 />;
    case "fl170":
      return <Fl170 />;
    case "fl182":
      return <Fl182 />;
    case "fl190":
      return <FL190 />;
    case "fl191":
      return <Fl191 />;
    // case "fl192":
    //   return <FL192 />;
    case "fl330":
      return <FL330 />;
    case "fl335":
      return <FL335 />;
    case "fl800":
      return <FL800 />;
    case "1034":
      return <FL1034 />;
    case "1034":
      return <FL1034 />;
    case "fw001info":
      return <FW001Info />;
    case "fw002":
      return <Fw002 />;
    case "petition":
      return <Petition />;

    default:
      return <div>Invalid Form</div>;
  }
}
