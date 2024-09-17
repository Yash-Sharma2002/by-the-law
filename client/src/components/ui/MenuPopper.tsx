import React from "react";
import {
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Popover,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import MenuInterface from "../../interface/Menu";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";

export default function MenuPopper(props: {
  menu: MenuInterface;
  isOpen: boolean;
  onClose: () => void;
  margin: number;
}) {
  const { user: CurrentUser } = React.useContext(AppContext);
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverContent
          className={`w-fit h-screen rounded-[0px!important] shadow-lg !z-50 !fixed top-0`}
          style={{ border: 0, marginLeft: props.margin + 3 }}
        >
          <PopoverHeader fontWeight="semibold">{props.menu.name}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody className="grid">
            {props.menu.subMenu?.map((menu: MenuInterface, index: number) => {
              if (
                menu.roles === undefined ||
                !menu.roles.includes(CurrentUser.Roles)
              ) {
                return <></>;
              }
              return (
                <SubMenu key={index} menu={menu} onClose={props.onClose} />
              );
            })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}

export function SubMenu(props: { menu: MenuInterface; onClose: () => void }) {
  const { user: CurrentUser } = React.useContext(AppContext);
  return (
    <>
      {props.menu.subMenu !== undefined && props.menu.subMenu.length > 0 ? (
        <>
          <Accordion allowToggle>
            {" "}
            <AccordionItem className="border-none">
              <h2>
                <AccordionButton className="py-[1px!important]">
                  <AccordionIcon className=" -rotate-90" />
                  <span>{props.menu.name}</span>
                </AccordionButton>
              </h2>
              <AccordionPanel className="py-[1px!important] flex flex-col">
                {props.menu.subMenu!.map(
                  (menu: MenuInterface, index: number) => {
                    if (
                      menu.roles === undefined ||
                      !menu.roles.includes(CurrentUser.Roles)
                    ) {
                      return <></>;
                    }
                    return (
                      <SubMenu
                        key={index}
                        menu={menu}
                        onClose={props.onClose}
                      />
                    );
                  }
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <NormalLink menu={props.menu} onClose={props.onClose} />
      )}
    </>
  );
}

export function NormalLink(props: {
  menu: MenuInterface;
  onClose: () => void;
}) {
  return (
    <>
      <Link
        to={"/mi" + props.menu.path}
        onClick={props.onClose}
        className="ml-5 text-blue-500"
      >
        {props.menu.name}
      </Link>
    </>
  );
}
