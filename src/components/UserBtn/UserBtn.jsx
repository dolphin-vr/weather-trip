import { googleLogout } from "@react-oauth/google";
import { Avatar, BtnLogout } from "./UserBtn.styled";

export const UserBtn = ({ user, onSignOut }) => {
  return (
    <BtnLogout
      type="button"
      onClick={() => {
        googleLogout();
        localStorage.removeItem("tripCredl");
        onSignOut(null);
      }}>
      <Avatar src={user.picture} />
    </BtnLogout>
  );
};
