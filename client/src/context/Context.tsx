import React from "react";
import Loading from "../components/common/Loader/Loading";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<any>({});
  const [Notifications, setNotifications] = React.useState<any>([]);

  
  const toast = useToast();


  function setData(data: any) {
    setDataForUser({
      Id: data.Id,
      Token: data.Token,
      Session: data.Session,
      Name: data.Name,
      Email: data.Email,
      Roles: data.Roles,
    });
  }


  const setDataForUser = React.useMemo(() => (data: any) => {
    setUser({
      Id: data.Id,
      Token: data.Token,
      Name: data.Name,
      Email: data.Email,
      Session: data.Session,
      Roles: data.Roles,
    });
    localStorage.setItem("user", JSON.stringify(data));
    setUserCookie(data);
  }, []);

  function setUserCookie(data: any) {
    // 7 day expire
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `Id=${JSON.stringify(
      data.Id
    )}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `Token=${JSON.stringify(
      data.Token
    )}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `Email=${JSON.stringify(
      data.Email
    )}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `Session=${JSON.stringify(
      data.Session
    )}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `Name=${JSON.stringify(
      data.Name
    )}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `Roles=${JSON.stringify(
      data.Roles
    )}; expires=${date.toUTCString()}; path=/`;
  }

  const fetchUserDetails = React.useCallback(async () => {
    setLoading(true);
    try {
      let user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user.Id === undefined) {
        user = {
          Id: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Id\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
          Token: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
          Email: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Email\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
          Session: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Session\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
          Name: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Name\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
          Roles: JSON.parse(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)Roles\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          ),
        };
      }

      if (
        user.Id === undefined ||
        user.Id === "" ||
        user.Id === null ||
        user.Token === undefined ||
        user.Token === "" ||
        user.Token === null ||
        user.Session === undefined ||
        user.Session === "" ||
        user.Session === null
      ) {
        notSignIn.current();
      }
      else {
        const currentUrl = window.location.pathname;
        if (currentUrl === "/sign-in" || currentUrl === "/" || currentUrl === "/mi") navigate("/mi/default");
        else navigate(currentUrl);
      }

      setDataForUser(user);
    } catch (err) {
      notSignIn.current();
    }

    setLoading(false);
  }, [setDataForUser,navigate]);

  let notSignIn = React.useRef(()=>{})

  notSignIn.current = ()=>{
    const currentUrl = window.location.pathname;
    console.log(currentUrl);
    if (currentUrl !== "/sign-in" && currentUrl !== "/password/forget" && !currentUrl.includes("/password/reset") ) navigate("/sign-in");
    else navigate(currentUrl);
    Logout();
    return;
  }

  function raiseToast(title: string, status: string, message?: string) {
    toast({
      title: title,
      description: message || "",
      status: status as any,
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  }

  function Logout() {
    document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "Session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    sessionStorage.clear();
    setUser({});
  }



  React.useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);


  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        setData,
        Logout,
        setLoading,
        loading,
        fetchUserDetails,
        raiseToast,
        Notifications,
        setNotifications,
      }}
    >
      {children}
      {loading && <Loading />}
    </AppContext.Provider>
  );
};

export default AppProvider;
