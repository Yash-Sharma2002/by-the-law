import React from "react";
import FormTopBar from "./FormTopBar";
import FormTopBarInterface from "../../interface/FormTopBar";

type Props = {
  children: React.ReactNode;
  options: FormTopBarInterface[];
  name: string;
  refreh?: () => void;
  formTopBar?: boolean;
};

export default function Layout(props: Props) {
  return (
    <>
      <div className="mt-12 ml-12 mr-2 relative overflow-hidden h-[93vh]">
        {
          (props.formTopBar === undefined || props.formTopBar) && <FormTopBar options={props.options} refreh={props.refreh ? props.refreh : ()=>{} } />
        }
        <div className="mt-3 h-full">
          <h1 className="font-medium text-xl">
            {props.name}
          </h1>
          {props.children}</div>
      </div>
    </>
  );
}
