import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Topbar from "../components/ui/Topbar";
import { useParams } from "react-router-dom";
import DisplayType from "../config/enum/DisplayType";
import FormsWithData from "../config/Menu/FormsWithData";
export default function Form() {
  const { mi } = useParams();
  const [Object, setObject] = React.useState<React.ReactNode | null>();

  const Element = React.useCallback(
    (menu = FormsWithData) => {
      let Object: React.ReactNode | undefined | (() => void);
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].path === "/" + mi && menu[i].type === DisplayType.Form) {
          Object = menu[i].Object;
          setObject((Object as React.ReactNode) || null);
          break;
        }
      }
    },
    [mi]
  );

  React.useEffect(() => {
    Element();
  }, [mi, Element]);

  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="mt-12 ml-12 mr-2 relative overflow-y-auto overflow-x-hidden new-scroll h-[90vh]">
        {Object ? Object : <h1>404</h1>}
      </div>
    </>
  );
}
