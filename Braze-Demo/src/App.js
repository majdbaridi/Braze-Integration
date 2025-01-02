import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import * as braze from "@braze/web-sdk";
import "./App.css";
import BrazeLogin from "./components/BrazeLogin";
import Product from "./components/Product";

import PFLogo from "./components/pfLogo";
import UserComponent from "./components/UserComponent";
import { BrowserRouter , Route, Routes} from 'react-router-dom'
function App() {
  const [message, setMessage] = useState("");

  const apiKey = "";
  const instance = "sdk.fra-01.braze.eu";

  const handleLoginSubmit = (username) => {
    // Handle login submission here, for example, send it to server

    braze.changeUser(username);

    setMessage(`Username has been set to ${username}`);
    setTimeout(() => {
      setMessage(``);
    }, 2000);
  };

  useEffect(() => {
    // initialize the SDK
    braze.initialize(apiKey, {
      baseUrl: instance,
      enableLogging: true,
      allowUserSuppliedJavascript: true,
      minimumIntervalBetweenTriggerActionsInSeconds: 5,
      sessionTimeoutInSeconds: 1800,
      manageServiceWorkerExternally: false,
    });

    braze.openSession();
  });
  return (
    <>

        <PFLogo className="App-logo2" alt="logo" style={{ width: 200 }} />
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<UserComponent braze={braze} onSubmit={handleLoginSubmit}/>}></Route>
              <Route path='/landing' element={<Product/>}>

            </Route>

          </Routes>

        </BrowserRouter>




    </>
  );
}

export default App;
