// import './App.css'
import { useEffect } from "react";
import { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { MainPage } from "./pages/MainPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { jwtDecode } from "jwt-decode";

const getSavedUser = () => {
  const savedCredl = localStorage.getItem("tripCredl");
  if (savedCredl !== null) {
    return savedCredl;
  }
  return '';
};

function App() {
  const [person, setPerson] = useState()
  const [credential, setCredential] = useState(getSavedUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  if (credential) {
    setIsLoggedIn(true);
    setPerson({ ...jwtDecode(credential) });
  } else {
    setIsLoggedIn(false);
    setPerson({});
  }
  }, [credential]);

  return isLoggedIn ? (
    <>
      <MainPage user={person} onSignOut={setCredential} />
      <GlobalStyle />
    </>
  ) : (
    <WelcomePage onSignIn={setCredential} />
  );
}

export default App
