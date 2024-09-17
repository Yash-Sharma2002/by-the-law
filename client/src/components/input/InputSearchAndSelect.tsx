import React from "react";

import {
  Center,
  CircularProgress,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AppContext } from "../../context/Context"
import { LinkSelect } from "../../interface/SelectArray"
import MenuInterface from "../../interface/Menu"
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import DisplayType from "../../config/enum/DisplayType"
import { MainMenu } from "../../config/Menu/MainMenu"

export default function InputSearchAndSelect() {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { user: CurrentUser } = React.useContext(AppContext);

  const [values, setValues] = React.useState<LinkSelect[]>([]);

  function changeValues() {
    setLoading(true);
    let data = MainMenu;

    let temp: LinkSelect[] = [];
    let level: string[] = [];

    data.map((menu: MenuInterface) => subMenu(temp, menu, level));
    setValues(temp);
    setLoading(false);
  }

  function subMenu(temp: LinkSelect[], data: MenuInterface, level: string[]) {
    level.push(data.name);
    data.subMenu?.map((menu: MenuInterface) => {
      if (menu.roles.includes(CurrentUser?.Roles) || menu.roles.length === 0) {
        if (menu.name.toLowerCase().includes(search.toLowerCase()) && menu.type === DisplayType.Form) {
          level.push(menu.name);
          temp.push({
            name: menu.name,
            link: menu.path || "/",
            subText: level.join(" > "),
          });
          level.pop();
        } else if (menu.subMenu !== undefined && menu.subMenu.length > 0) {
          subMenu(temp, menu, level);
        }
      }
      return null;
    });
    level.pop();
  }

  return (
    <>
      <div className="flex justify-start items-center py-2 w-full ">
        <div className="flex justify-strart items-center shadow-lg rounded-lg w-1/2 mx-2">
          <Menu>
            <MenuButton
              as={Center}
              onClick={changeValues}
              className={
                "text-[#004d3d] h-7 p-1 rounded-l-sm bg-white cursor-pointer"
              }
            >
              <IoIosSearch className="text-[18px]" />
            </MenuButton>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className={
                "input border-none rounded-l-none text-[14px] w-full h-7 text-black font-medium disabled:bg-white disabled:text-black placeholder:font-normal placeholder:text-[#000] bg-white focus:outline-none my-[unset!important] pl-2"
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  changeValues();
                }
              }}
              style={{ borderColor: "rgb(189, 189, 189)" }}
            />

            {values.length > 0 && (
              <MenuList>
                {values.map((value: LinkSelect, index: number) => (
                  <div key={index}>
                    <MenuItem p={0} className="hover:bg-[#004d3d] hover:text-[#fff] ">
                      <LinkSelectComponent
                        name={value.name}
                        link={value.link}
                        subText={value.subText}
                      />
                    </MenuItem>
                    <Divider />
                  </div>
                ))}
              </MenuList>
            )}
          </Menu>
        </div>
        {loading && (
          <CircularProgress isIndeterminate color="#facc15" size={4} />
        )}
      </div>
    </>
  );
}

function LinkSelectComponent({ name, link, subText }: LinkSelect) {
  return (
    <Link
      to={"/mi" + link}
      className=" text-[14px] font-medium cursor-pointer p-2"
    >
      <h2>{name}</h2>
      <p className=" text-[12px]">{subText}</p>
    </Link>
  );
}
