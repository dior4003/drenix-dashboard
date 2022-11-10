import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./Components/Hooks/context";
import { Main } from "./Components/Main";
function App() {
  const [isLogin, setIsLogin] = useState(useContext(AuthContext));

  useEffect(
    function () {
      localStorage.getItem("auth") ? setIsLogin(true) : setIsLogin(false);
    },
    [setIsLogin],
  );
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
