import { GoogleLogin } from "@react-oauth/google";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Layout } from "./WelcomePage.styled";

export const WelcomePage = ({ onSignIn }) => {
  return (
    <Layout>
      <PageTitle />
      <p>Plan your trips and see the weather forecast</p>
      <GoogleLogin
        onSuccess={credentialResponse => {
          localStorage.setItem("tripCredl", credentialResponse.credential);
          onSignIn(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </Layout>
  );
};
