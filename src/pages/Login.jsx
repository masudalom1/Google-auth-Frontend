import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const googlelogin = async () => {
    try {
      // Firebase popup login
      const response = await signInWithPopup(auth, provider);
      console.log(response);

      const user = response.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
      };

      // Send to backend
      const apiResponse = await fetch("https://google-auth-backend-nu.vercel.app/api/auth", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // ✅ fixed
      });

      const result = await apiResponse.json();
      console.log("Backend response:", result);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={googlelogin}>Login with Google</button>
    </div>
  );
}

export default Login;
