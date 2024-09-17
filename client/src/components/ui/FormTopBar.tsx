import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { FaRegFileExcel, FaFileCsv } from "react-icons/fa";
import FormTopBarInterface from "../../interface/FormTopBar";
import { useNavigate } from "react-router-dom";
import DisplayType from "../../config/enum/DisplayType";
import MenuInterface from "../../interface/Menu";
import { AppContext } from "../../context/Context";
import { ExcelContext } from "../../context/ExcelContext";

export default function FormTopBar({
  options,
  refreh
}: {
  options: FormTopBarInterface[];
  refreh: () => void;
}) {
  const naviagate = useNavigate();
  const { user: CurrentUser } = React.useContext(AppContext);
  const { downloadAsExcel, downloadAsCsv } = React.useContext(ExcelContext)

  const [selectMenu, setSelectMenu] =
    React.useState<FormTopBarInterface | null>(options[0]);

  const [Element, setElement] = React.useState<JSX.Element | null>(null);
  const { onClose } = useDisclosure();
  const [drawer, setDrawer] = React.useState(false);

  const variants = {
    open: { height: "100px" },
    halfOpen: { height: "35px" },
  };

  function closeDrawer() {
    if (!drawer || options.length <= 0) return;

    // close all accordians
    let accordians = document.getElementsByClassName("sidebar-accordian");
    for (let i = 0; i < accordians.length; i++) {
      let element = accordians[i] as HTMLElement;
      if (element.getAttribute("aria-expanded") === "true") {
        element.click();
      }
    }

    // close drawer and menu
    setDrawer(false);
    setSelectMenu(null);
    onClose();
  }

  function onMenuClick(menu: FormTopBarInterface) {
    if (menu.roles === undefined || !menu.roles.includes(CurrentUser.Roles)) {
      return;
    }
    if (drawer) {
      closeDrawer();
      setSelectMenu(null);
    } else {
      if (menu.type === DisplayType.Function) {
        if (typeof menu.Object === "function") {
          menu.Object();
        }
        return;
      } else if (menu.type === DisplayType.Form) {
        let isopen = JSON.parse(
          sessionStorage.getItem(window.location.pathname + "/" + menu.name) ||
          "false"
        );
        if (isopen) {
          sessionStorage.setItem(
            window.location.pathname + "/" + menu.name,
            JSON.stringify(false)
          );
          setElement(null);
          return;
        }
        sessionStorage.setItem(
          window.location.pathname + "/" + menu.name,
          JSON.stringify(true)
        );
        setElement(menu.Object as JSX.Element);
        return;
      } else if (menu.type === DisplayType.Link) {
        naviagate(menu.Object as string);
        return;
      }

      setDrawer(true);
      // wait for drawer to open
      setTimeout(() => {
        setSelectMenu(menu);
      }, 200);
    }
  }

  function handleClick(menu: MenuInterface) {
    if (menu.type === DisplayType.Function) {
      if (typeof menu.Object === "function") {
        menu.Object();
      }
      return;
    } else if (menu.type === DisplayType.Form) {
      let isopen = JSON.parse(
        sessionStorage.getItem(window.location.pathname + "/" + menu.name) ||
        "false"
      );
      if (isopen) {
        sessionStorage.setItem(
          window.location.pathname + "/" + menu.name,
          JSON.stringify(false)
        );
        setElement(null);
        return;
      }
      sessionStorage.setItem(
        window.location.pathname + "/" + menu.name,
        JSON.stringify(true)
      );
      setElement(menu.Object as JSX.Element);
      return;
    } else if (menu.type === DisplayType.Link) {
      naviagate(menu.Object as string);
      return;
    }
  }
  return (
    <>
      <motion.div
        id="form-top-bar"
        className="w-[99%] bg-white px-1 py-[2px] m-[7px] rounded-lg  "
        style={{
          boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.2)",
          outline: "1px solid transparent",
        }}
        variants={variants}
        initial="halfOpen"
        animate={drawer ? "open" : "halfOpen"}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-start items-start">
            {options.map((option, index) => {
              if (
                option.roles === undefined ||
                !option.roles.includes(CurrentUser.Roles)
              ) {
                return <></>;
              }
              return (
                <div key={index} className="flex items-center">
                  <div
                    onClick={() => onMenuClick(option)}
                    className="flex items-center cursor-pointer mr-2 text-blue-500"
                  >
                    {option.Icon && <option.Icon className="text-[16px]" />}
                    <p className=" text-sm">{option.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-start items-center">

            <button
              onClick={() => downloadAsExcel()}
              className="w-fit rounded-full text-blue-500 mr-2  my-2 "
            >
              <FaRegFileExcel className="text-lg" />
            </button>
            <button
              onClick={() => downloadAsCsv()}
              className="w-fit rounded-full text-blue-500 mr-2  my-2 "
            >
              <FaFileCsv className="text-lg" />
            </button>

            <button
              onClick={refreh}
              className="w-fit rounded-full text-blue-500 mr-2  my-2 "
            >
              <IoMdRefresh className="text-lg" />
            </button>
            <button
              onClick={drawer ? closeDrawer : () => onMenuClick(options[0] || {} as FormTopBarInterface)}
              className="w-fit rounded-full text-blue-500 mr-2  my-2 "
            >
              <FaAngleDown
                className={
                  "text-lg transition-all  " +
                  (drawer ? "transform rotate-180 " : "")
                }
              />
            </button>
          </div>
        </div>

        {selectMenu && drawer && (
          <div className="w-fit h-fit text-center">
            <div className="flex flex-col items-start cursor-pointer flex-wrap h-[60px] ">
              {selectMenu.subMenu !== undefined &&
                selectMenu.subMenu.map((subOption, index) => {
                  if (
                    subOption.roles === undefined ||
                    !subOption.roles.includes(CurrentUser.Roles)
                  ) {
                    return <></>;
                  }
                  return (
                    <div
                      key={index}
                      onClick={() => handleClick(subOption)}
                      className="flex items-center cursor-pointer mr-2 justify-start"
                    >
                      {subOption.Icon && (
                        <subOption.Icon className="w-5 h-5 mr-2" />
                      )}
                      <p className=" text-sm">{subOption.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </motion.div>
      {Element}
    </>
  );
}
