import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/loader/Loading";
import Signin from "./pages/Signin";
import AppProvider from "./context/Context";
import { SidebarData } from "./constants/Sidebar";
import GlobalLayout from "./components/dashboard/GlobalLayout";
import WrongUrl from "./pages/WrongUrl";
import { ChakraProvider } from "@chakra-ui/react";
import { OtherRoutes, RoutesWithoutLayout } from "./constants/OtherRoute";
import { FormRoute } from "./constants/FormRoute";

function App() {
  return (
    <>
      <AppProvider>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </AppProvider>
    </>
  );
}

function Router() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="*" element={<WrongUrl />} />

            {SidebarData.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <GlobalLayout>
                      <item.Element />
                    </GlobalLayout>
                  }
                />
              );
            })}

            {OtherRoutes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <GlobalLayout>
                      <item.Element />
                    </GlobalLayout>
                  }
                />
              );
            })}
            {RoutesWithoutLayout.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.Element />}
                />
              );
            })}

            {FormRoute.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.Element />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
