import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Aurth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log();
    }
  };

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>sign in with google</button>
    </div>
  );
};
