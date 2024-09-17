import React from "react";
import { AppContext } from "../../context/Context";
// import getMyNotification from "../../functions/api/Notifications/getMyNotifications";

export default function Default() {

  const {user:CurrentUser,raiseToast,setLoading,setNotifications} = React.useContext(AppContext);
  const getNotification = React.useRef(()=>{});
  

  // getNotification.current = async () => {
  //   setLoading(true);
  //   try{
  //     const res = await getMyNotification(CurrentUser);
  //     if(res.status === 200){
  //       setNotifications(res.data);
  //     }
  //     else{
  //       raiseToast(res.message,"error");
  //     }
  //   }
  //   catch(e:any){
  //     raiseToast(e.response.data,"error");
  //   }
  //   finally{
  //     setLoading(false);
  //   }
  // }

  React.useEffect(() => {
    getNotification.current();
  }, []);

  return (
    <>
      <div className="mt-12 ml-12 mr-2 relative overflow-hidden h-[80vh] flex justify-center items-center">

      <h1 className="w-full text-[6rem] text-center">WELCOME TO <br />
       {/* {organisation.organisation_name} */}
       ByTheLaW
       </h1>
      </div>
    </>
  );
}
