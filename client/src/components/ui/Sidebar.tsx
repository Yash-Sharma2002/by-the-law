import React from "react";
import {
  Img,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import MenuInterface from "../../interface/Menu";
import MenuPopper from "./MenuPopper";
import { MainMenu } from "../../config/Menu/MainMenu";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { AppContext } from "../../context/Context";
import DisplayType from "../../config/enum/DisplayType";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { user: CurrentUser } = React.useContext(AppContext);
  const [selectMenu, setSelectMenu] = React.useState<MenuInterface | null>(
    null
  );
  const [anchorEl, setAnchorEl] = React.useState<number>(30);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [drawer, setDrawer] = React.useState(false);

  const navigate = useNavigate();

  const variants = {
    open: { width: "230px" },
    halfOpen: { width: "40px" },
  };

  function closeDrawer() {
    if (!drawer) return;

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
    onClose();
  }

  React.useEffect(() => {
    if (drawer) {
      setAnchorEl(230);
    } else {
      setAnchorEl(30);
    }
  }, [drawer]);


  return (
    <>
      <motion.div
        id="sidebar"
        className="w-12 h-screen fixed top-0 left-0 z-50 overflow-y-auto bg-white shadow-xl overflow-x-hidden"
        variants={variants}
        initial="halfOpen"
        animate={drawer ? "open" : "halfOpen"}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col justify-between items-start h-[90%] w-full">
          <div className=" w-full">
            <p>ByTheLaw</p>
            {/* <Img
              src={
                drawer
                  ? require("../../../assets/logo/navlogo.svg").default
                  : require("../../../assets/logo/nav.png")
              }
              alt="logo"
              className={`mx-auto my-2 ` + (drawer ? "w-40 h-10" : "w-7 h-7")}
            /> */}

            <div className="flex flex-col justify-start items-start w-full">
              {/* If design not matter then the whole code from line no 78 to 164 can be replaced by menupopper submenu and normal link */}
              <Accordion allowToggle className="w-full">
                {MainMenu.map((menu: MenuInterface, idx: number) => {
                  if (
                    menu.roles.length > 0 &&
                    !menu.roles.includes(CurrentUser.Roles)
                  ) {
                    return null;
                  }
                  return (
                    <div key={idx}>
                      {menu.subMenu !== undefined ? (
                        <AccordionItem className="border-none w-full">
                          <h2
                            key={menu.name}
                            onClick={() => setDrawer(true)}
                            className={
                              "flex justify-start items-center w-full  hover:bg-green-200 " +
                              (drawer ? "px-4" : "px-2")
                            }
                          >
                            <AccordionButton className="py-[1px!important] ps-[0px!important] pe-[0px!important] hover:bg-[unset!important] flex justify-between items-center w-10/12 sidebar-accordian">
                              <div className="flex justify-start items-center">
                                {menu.Icon && (
                                  <menu.Icon className="w-6 h-6 my-2  " />
                                )}
                                {drawer && (
                                  <span className="ml-2">{menu.name}</span>
                                )}
                              </div>
                              {drawer && <AccordionIcon />}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel className="py-[1px!important] ">
                            {menu.subMenu !== undefined &&
                            menu.subMenu.length > 0 ? (
                              <>
                                {menu.subMenu!.map(
                                  (menu: MenuInterface, index: number) => {
                                    if (
                                      menu.roles.length > 0 &&
                                      !menu.roles.includes(CurrentUser.Roles)
                                    )
                                      return null;

                                    return (
                                      <div key={index}>
                                        <button
                                          onClick={() => {
                                            setSelectMenu(menu);
                                            if (!isOpen) onToggle();
                                            // setAnchorEl(
                                            //   document.getElementById("sidebar")
                                            //     ?.offsetWidth || 30
                                            // );
                                          }}
                                          className={
                                            "w-full text-left pr-4 pl-8 py-1 my-1 rounded-md " +
                                            (selectMenu?.name === menu.name
                                              ? " bg-[#004d3d] text-white"
                                              : "hover:bg-green-200")
                                          }
                                        >
                                          {menu.name}
                                        </button>
                                      </div>
                                    );
                                  }
                                )}
                              </>
                            ) : (
                              <p className="w-full text-left pr-4 pl-8 text-sm">
                                Not Found
                              </p>
                            )}
                          </AccordionPanel>
                        </AccordionItem>
                      ) : (
                        <h2
                          key={menu.name}
                          onClick={() => {
                            if (menu.type === DisplayType.Form)
                              navigate("/mi" + menu.path);
                            else setDrawer(true);
                          }}
                          className={
                            "flex justify-start items-center w-full  hover:bg-green-200 cursor-pointer " +
                            (drawer ? "px-4" : "px-2")
                          }
                        >
                          <div className="py-[1px!important] ps-[0px!important] pe-[0px!important] hover:bg-[unset!important] flex justify-between items-center w-10/12 sidebar-accordian">
                            <div className="flex justify-start items-center">
                              {menu.Icon && (
                                <menu.Icon className="w-6 h-6 my-2  " />
                              )}
                              {drawer && (
                                <span className="ml-2">{menu.name}</span>
                              )}
                            </div>
                          </div>
                        </h2>
                      )}
                    </div>
                  );
                })}
              </Accordion>
            </div>
          </div>
          <button
            onClick={drawer ? closeDrawer : () => setDrawer(true)}
            className="bg-[#004d3d] p-2 rounded-full text-white ml-1 mx-auto my-2 "
          >
            <FaAngleRight
              className={
                "w-4 h-4 transition-all  " +
                (drawer ? "transform rotate-180 " : "")
              }
            />
          </button>
        </div>
      </motion.div>

      {selectMenu && (
        <MenuPopper
          menu={selectMenu}
          isOpen={isOpen}
          onClose={closeDrawer}
          margin={anchorEl}
        />
      )}
    </>
  );
}
