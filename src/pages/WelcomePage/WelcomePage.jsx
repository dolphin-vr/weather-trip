import { GoogleLogin } from "@react-oauth/google";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ErrorMsg, Layout } from "./WelcomePage.styled";
import { useState } from "react";

export const WelcomePage = ({ onSignIn }) => {
  const [showErrMsg, setShowErrMsg] = useState(false);
  return (
    <Layout>
      <PageTitle />
      <p>Plan your trips and see the weather forecast</p>
      <GoogleLogin
        onSuccess={credentialResponse => {
          setShowErrMsg(false);
          localStorage.setItem("tripCredl", credentialResponse.credential);
          onSignIn(credentialResponse.credential);
        }}
        onError={() => {
          setShowErrMsg(true);
        }}
        useOneTap
      />
      {showErrMsg && <ErrorMsg>Login Failed. Please try again</ErrorMsg>}
    </Layout>
  );
};
