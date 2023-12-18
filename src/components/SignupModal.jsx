import { useState } from "react";
import googleIcon from "../assets/google-icon.png"

import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignupModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            window.location.reload();
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const signIn = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            window.location.reload();
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const signInWithGoogle = async() =>{
        try {
            await signInWithPopup(auth, googleProvider);
            
            window.location.reload();
          } catch (signInError) {
                console.error('Sign-in error:', signInError);
          }
    }

    return (
        <dialog id="signupModal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Welcome to Ecommerce</h3>

                <div role="tablist" className="tabs tabs-bordered tabs-lg justify-center">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab !w-40" aria-label="Sign up" />
                    <div role="tabpanel" className="tab-content py-10">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full mb-5" name="email" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered w-full mb-5" name="password" />
                        <button className="btn btn-primary btn-block" onClick={signUp}>Sign up</button>
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab !w-40" aria-label="Sign in" />
                    <div role="tabpanel" className="tab-content py-10">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full mb-5" name="email" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered w-full mb-5" />
                        <button className="btn btn-primary btn-block" onClick={signIn}>Sign in</button>
                    </div>

                </div>

                <button className="btn btn-outline btn-block" onClick={signInWithGoogle}>
                    <img src={googleIcon} className="w-5" alt="" srcset="" />
                    Continue with google
                </button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default SignupModal