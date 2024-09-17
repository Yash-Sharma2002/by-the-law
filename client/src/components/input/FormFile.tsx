import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Progress,
} from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppContext } from "../../context/Context";
import { storage } from "../../config/firebase";

export default function FormFile(props: {
  label: string;
  handleChange?: (value: string) => void;
  name: string;
  Icon?: React.JSXElementConstructor<any>;
  isRequired?: boolean;
  isDisabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}) {
  const [uploadedFile, setUploadedFile] = React.useState<boolean>(false);
  const [url, setUrl] = React.useState<string>("");
  const [progress, setProgress] = React.useState<number>(0);
  const [error, setError] = React.useState({
    hasError: false,
    message: "",
  });
  const { setLoading, user: CurrentUser } = React.useContext(AppContext);

  const inputRef = React.useRef<HTMLInputElement>(null);

  async function UploadFile() {
    let file = inputRef.current!.files![0];
    
    
    if (!file) {
      setError({
        hasError: true,
        message: "Please select a file",
      });
      return;
    } 

    // 100 mb max
    if (file.size > 100000000) {
      setError({
        hasError: true,
        message: "File size should be less than 4mb",
      });
      return;
    }

    setLoading(true);
    const storageRef = ref(storage, `${CurrentUser.Id}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            // console.log("Upload is paused");
            break;
          case "running":
            // console.log("Upload is running");
            break;
        }
      },
      (error) => {
        setError({
          hasError: true,
          message: error.message,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (props.handleChange) props.handleChange(downloadURL);
          setUrl(downloadURL);
          setUploadedFile(true);
          setLoading(false);
        });
      }
    );
    setLoading(false);
  }

  return (
    <>
      {props.type?.includes("image") && url ? (
        <img src={url} alt="uploaded" className="w-20 h-20 object-cover" />
      ) : props.type?.includes("video") && url ? (
        <video src={url} controls className="w-20 h-20 object-cover" />
      ) : (
        <FormControl
          isInvalid={error.hasError}
          style={{
            position: "unset",
          }}
          className={props.onClick ? "cursor-pointer text-blue-600" : ""}
          onClick={props.onClick}
        >
          <FormLabel>{props.label}</FormLabel>
          <div className="w-full mx-auto border relative border-dashed ">
            <input
              type="file"
              accept={props.type || "*"}
              name={props.name}
              ref={inputRef}
              className=" absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
              required={props.isRequired || false}
              disabled={props.isDisabled || false}
              placeholder={props.placeholder || `Enter ${props.label}`}
              onKeyPress={props.onKeyPress}
            />
            <div className="relative z-0 text-center py-4 flex justify-center items-center flex-col">
              {props.Icon ? (
                <props.Icon className=" text-2xl text-[#6f6666]" />
              ) : (
                <FaFile className=" text-2xl text-[#6f6666]" />
              )}
              <p className="text-xs">Click to upload</p>
            </div>
          </div>
          {error.hasError && (
            <FormErrorMessage>{error.message}</FormErrorMessage>
          )}

          {uploadedFile ? (
            <p className="text-xs text-green-500">File uploaded successfully</p>
          ) : (
            <Button type="button" className="mt-2" onClick={UploadFile}>
              Upload
            </Button>
          )}
          {progress > 0 && progress < 100 && <Progress value={progress} />}

         
        </FormControl>
      )}
    </>
  );
}
