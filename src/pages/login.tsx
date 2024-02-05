import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login= () => {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
    }

    return (
        <div>
            <p>Sign in with Google to Continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}