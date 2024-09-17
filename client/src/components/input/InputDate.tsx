import * as React from "react";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import focus from "../../functions/focus";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

type Props = {
  label: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  error?: string;
  defaultValue?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focus?: string
  onClick?: () => void;
  minDate?: Date;
  maxDate?: Date;
}


export default function InputDate(props: Props) {

  const ref = React.useRef<HTMLInputElement>(null);

  function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
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

  function handleChange(date: Date | null | undefined) {
    if (date && props.handleChange) {
      if (props.handleChange) {
        props.handleChange({
          target: {
            name: props.name,
            value: new Date(date).toISOString().slice(0, 19).replace("T", " "),
          },
        } as React.ChangeEvent<HTMLInputElement>)
      }
    }
  }

  return (
    <FormControl
      isInvalid={props.isInvalid}
      style={{
        position: "unset",
      }}
      className={props.onClick ? "cursor-pointer text-blue-600" : ""}
      onClick={props.onClick}
    >
      <FormLabel>{props.label}</FormLabel>
      <DatePicker
        minDate={props.minDate || new Date("1900-01-01")}
        maxDate={props.maxDate || new Date("2100-01-01")}
        placeholder="Select a date..."
        ref={ref}
        name={props.name}
        className="chakra-input css-10dip6r disabled:!opacity-100 disabled:!cursor-default !px-2 "
        required={props.isRequired || false}
        disabled={props.isDisabled || false}
        onSelectDate={handleChange}
        onKeyPress={onKeyPress}
        style={{
          position: "unset",
        }}

      />
      {props.isInvalid && <FormErrorMessage>{props.error}</FormErrorMessage>}
    </FormControl>
  );
};