import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
import focus from "../../functions/focus";
  
  export default function FormArea(props: {
    label: string;
    handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    type?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    error?: string;
    defaultValue?: string;
    placeholder?: string;
    onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    focus?:string;
    onClick?: () => void;
  }) {
    const ref = React.useRef<HTMLTextAreaElement>(null);

    function onKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>){
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
          className={props.onClick ? "cursor-pointer text-blue-600" : ""}
          onClick={props.onClick}
        >
          <FormLabel>{props.label}</FormLabel>
          <Textarea
            name={props.name}
            ref={ref}
            size='sm'
            className="disabled:!opacity-100 disabled:!cursor-default"
            isRequired={props.isRequired || false}
            isDisabled={props.isDisabled || false}
            isInvalid={props.isInvalid || false}
            onChange={props.handleChange}
            placeholder={props.placeholder || `Enter ${props.label}`}
            onKeyPress={onKeyPress}
            resize={"none"}
            style={{
              position: "unset",
            }}
          />
          {props.isInvalid && <FormErrorMessage>{props.error}</FormErrorMessage>}
        </FormControl>
      </>
    );
  }
  