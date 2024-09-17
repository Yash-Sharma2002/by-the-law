import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ERP from "./pages/ERP";
import ContextProvider from "./context/ContextProvider";
import Signin from "./pages/Signin";
import Form from "./components/dashboard/forms/Form";
import ForgetPass from "./pages/ForgetPass";
import PassReset from "./pages/PassReset";
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </>
  );
}

function Router() {
  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route
            path="/mi/:mi"
            element={<ContextProvider children={<ERP />} />}
            />
            

          <Route
            path="/mi/:mi/:data"
            element={<ContextProvider children={<Form />} />}
          />

          <Route
            path="/sign-in"
            element={<ContextProvider children={<Signin />} />}
          />

          <Route
            path="/password/reset/:email/:uid"
            element={<ContextProvider children={<PassReset />} />}
          />

          <Route
            path="/password/forget"
            element={<ContextProvider children={<ForgetPass />} />}
          />

          <Route path="/" element={<ContextProvider children={<Signin />} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
