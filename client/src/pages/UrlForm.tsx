import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/data";
import axios from "axios";
import InputPass from "../components/input/InputPass";
import Divorce from "../components/pdf/divorce";

export default function UrlForm() {
  const { url, client_id } = useParams();
  const [validUrl, setValidUrl] = React.useState(
    // JSON.parse(sessionStorage.getItem("validUrl") as string) || false
    true
  );
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState({});

  async function validateUrl() {
    try {
      const params = new URLSearchParams();
      params.append("url", url || "");
      params.append("client_id", client_id || "");
      params.append("password", password);

      const data = await axios
        .get(API_URL + "/url/validate?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });
      if (data.message !== "Valid url") {
        alert(data.message);
        return;
      }
      sessionStorage.setItem("validUrl", JSON.stringify(true));
      setData(data.form);
      setValidUrl(true);
    } catch (err) {}
  }

  React.useEffect(() => {
    let validity = JSON.parse(sessionStorage.getItem("validUrl") as string);
    if (validity) {
      setValidUrl(true);
    } else {
      setValidUrl(false);
      sessionStorage.setItem("validUrl", JSON.stringify(false));
    }
  }, []);

  return (
    <>
      {!validUrl ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-1/2 p-5 border border-gray-200 rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold">Enter Password</h1>
            <InputPass
              name="password"
              label="Password"
              placeholder="Enter Password"
              defValue={password}
              onChangeHandler={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={validateUrl}
              className="bg-blue-500 text-white p-2 rounded-lg mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <Divorce />
      )}
    </>
  );
}
