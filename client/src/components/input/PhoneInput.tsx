import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import focus from "../../functions/focus";

export default function PhoneInput(props: {
  label: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focus?:string;
}) {
  const ref = React.useRef<HTMLInputElement>(null);

  
  function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>){
    if (props.onKeyPress) {
      props.onKeyPress(e);
    }
    if (e.key === "Enter") {
      focus(props.focus || "");
    }
  }


  React.useEffect(() => {
    if (props.defaultValue) {
      ref.current!.value = props.defaultValue;
    }
  }, [props.defaultValue]);

  return (
    <>
      <FormControl
        isInvalid={props.isInvalid}
        style={{
          position: "unset",
        }}
      >
        <FormLabel>{props.label}</FormLabel>
        <InputGroup>
          <InputLeftAddon>+1</InputLeftAddon>
          <Input
            type="tel"
            name={props.name}
            ref={ref}
            className="disabled:!opacity-100 disabled:!cursor-default"
            isRequired={props.isRequired || false}
            isDisabled={props.isDisabled || false}
            isInvalid={props.isInvalid || false}
            onChange={props.handleChange}
            placeholder={props.placeholder || `Enter ${props.label}`}
            onKeyPress={onKeyPress}
            style={{
              position: "unset",
            }}
          />
        </InputGroup>
        {props.isInvalid && <FormErrorMessage>{props.error}</FormErrorMessage>}
      </FormControl>
    </>
  );
}
