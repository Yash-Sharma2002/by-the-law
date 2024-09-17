import React from "react";
import InputSearchAndSelect from "../input/InputSearchAndSelect";
import { CiSettings, CiUser, CiCircleQuestion } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import {  useNavigate } from "react-router-dom";
import {
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { NotificationAction, NotificationType } from "../../config/enum/Notification";
import { AppContext } from "../../context/Context";

export default function Topbar() {
  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-[#002F53] !z-40 ">
        <div className="w-[60%] ml-auto">
          <div className="flex justify-between items-center">
            <InputSearchAndSelect />
            <div className="flex justify-center items-center">
              <Splitter />
              <Notifications />
              <Splitter />
              <Settings />
              <Splitter />
              <MyAccount />
              <Splitter />
              <CiCircleQuestion className="text-white text-[43px] p-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Settings() {
  return (
    <Menu>
      <MenuButton>
        <CiSettings className="text-white text-[40px] p-2 cursor-pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem className="hover:bg-[#004d3d] hover:text-white">
          History
        </MenuItem>
        <MenuItem className="hover:bg-[#004d3d] hover:text-white">
          Theme
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function MyAccount() {
  const { Logout } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    navigate("/sign-in");
  };

  function Profile() {
    navigate("/mi/profile/me");
  }

  return (
    <Menu>
      <MenuButton>
        <CiUser className="text-white text-[40px] p-2 cursor-pointer" />
      </MenuButton>
      <MenuList className="!z-40">
        <MenuItem onClick={Profile} className="hover:bg-[#004d3d] hover:text-white">
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          className="hover:bg-[#004d3d] hover:text-white"
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function Notifications() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Notifications, raiseToast, setNotifications, user, setLoading } =
    React.useContext(AppContext);
  const btnRef = React.useRef(null);

  async function performActionNotification(
    action: NotificationAction,
    RecId: string
  ) {
    // setLoading(true);
    // try {
    //   const res = await performAction(user, action, RecId);
    //   if (res.status === 200) {
    //     setNotifications(Notifications.filter((n:any) => n.RecId !== RecId));
    //   } else {
    //     raiseToast(res.message, "error");
    //   }
    // } catch (e) {
    //   raiseToast(e, "error");
    // }
    // setLoading(false);
  }

  function clearAll() {
    setLoading(true);
    Notifications.forEach(async (notification: any) => {
      await performActionNotification(
        NotificationAction.Clear,
        notification.RecId
      );
    })
    setLoading(false);
  }

  return (
    <>
      <div ref={btnRef} onClick={onOpen} className="relative">
        <IoIosNotificationsOutline className="text-white text-[40px] p-2 cursor-pointer" />
        {Notifications.length > 0 && (
          <div className="absolute top-0 right-0 mr-1 bg-[#facc15] text-[red] text-xs rounded-full px-1">
            {Notifications.length}
          </div>
        )}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>

          <DrawerBody>
            {Notifications.length > 0 ? (
              <>
                {/* clear all */}
                <div className="flex justify-end">
                  <button
                    className=" text-[#004d3d] cursor-pointer text-sm"
                    onClick={clearAll}
                  >
                    Clear All
                  </button>
                </div>
                {Notifications.map((notification: any, index: number) => {
                  if (notification.Type === NotificationType.Approve) {
                    return (
                      <div
                        className="border-b border-b-slate-800 px-2 py-3 my-1"
                        key={index}
                      >
                        <h2 className="font-semibold text-base">
                          {notification.Title} {notification.MainId}
                        </h2>
                        <p className=" text-sm ">
                          {notification.Description} by{" "}
                          {notification.GeneratedByName}
                        </p>
                        <div className="flex justify-end text-sm">
                          <p
                            className=" bg-[#004d3d] text-white px-1 py-1 rounded mx-1 cursor-pointer "
                            onClick={() => {
                              performActionNotification(
                                NotificationAction.ApproveProjectStatusChange,
                                notification.RecId
                              );
                            }}
                          >
                            Approve
                          </p>
                          <p
                            className=" bg-[#facc15] text-white px-1 py-1 rounded mx-1 cursor-pointer "
                            onClick={() => {
                              performActionNotification(
                                NotificationAction.RejectProjectStatusChange,
                                notification.RecId
                              );
                            }}
                          >
                            Reject
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Card key={index} className="my-1">
                        <CardHeader className="!py-1 font-semibold">
                          {notification.Title} For  {notification.MainId}
                        </CardHeader>
                        <CardBody className="!py-1">
                          {notification.Description}
                        </CardBody>
                      </Card>
                    );
                  }
                })}
              </>
            ) : (
              <h1>No Notifications</h1>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Splitter() {
  return (
    <Center height="30px">
      <Divider orientation="vertical" />
    </Center>
  );
}
