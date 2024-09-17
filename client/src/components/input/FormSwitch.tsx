import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import focus from "../../functions/focus";

export default function FormSwitch(props: {
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  error?: string;
  defaultValue?: boolean;
  placeholder?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLLabelElement>) => void;
  focus?: string;
}) {
  const ref = React.useRef<HTMLInputElement>(null);

  function onKeyPress(e: React.KeyboardEvent<HTMLLabelElement>){
    if (props.onKeyPress) {
      props.onKeyPress(e);
    }
    if (e.key === "Enter") {
      focus(props.focus || "");
    }
  }
  

  React.useEffect(() => {
    if (props.defaultValue) {
      ref.current!.checked = props.defaultValue;
    }
  }, [props.defaultValue]);

  return (
    <>
      <FormControl
        display="flex"
        alignItems="center"
        style={{
          position: "unset",
        }}
      >
        <FormLabel htmlFor={props.name} mb="0">
          {props.label}
        </FormLabel>
        <Switch
          name={props.name}
          ref={ref}
          type={props.type || "text"}
          isRequired={props.isRequired || false}
          isDisabled={props.isDisabled || false}
          isInvalid={props.isInvalid || false}
          onChange={props.handleChange}
          onKeyPress={onKeyPress}
          style={{
            position: "unset",
          }}
        />
        {props.isInvalid && <FormErrorMessage>{props.error}</FormErrorMessage>}
      </FormControl>
    </>
  );
}
