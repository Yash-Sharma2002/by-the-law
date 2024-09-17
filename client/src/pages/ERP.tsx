import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Topbar from "../components/ui/Topbar";
import { useParams } from "react-router-dom";
import { MainMenu } from "../config/Menu/MainMenu";
import DisplayType from "../config/enum/DisplayType";

export default function ERP() {
  const { mi } = useParams();

  const [Object, setObject] = React.useState<React.ReactNode | null | (() => void)>();

  const Element = React.useCallback(
    (menu = MainMenu) => {
      let Object: React.ReactNode | undefined | (() => void);

      for (let i = 0; i < menu.length; i++) {
        if (menu[i].path === "/" + mi && menu[i].type === DisplayType.Form) {
          Object = menu[i].Object;
          setObject(Object || null);
          break;
        }
        if (menu[i].subMenu) {
          Element(menu[i].subMenu);
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
      {Object ? (
        Object
      ) : (
        <div className="mt-12 ml-12 mr-2 relative  overflow-hidden">
          <h1>404</h1>
        </div>
      )}
    </>
  );
}
