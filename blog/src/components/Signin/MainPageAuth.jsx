import { useEffect, useState } from "react";
import { LogoSvg } from "../helper/LogoSvg";

import { Verse } from "./Verse";
import { verseData } from "../../data/verseData";
import { SignIn } from "./Signin";
import { SignUp } from "./SignUp";

export function MainPageAuth() {

    const [randomVerse, setRandomVerse] = useState(null); // Added state for random verse
    const [signup,setSignup] = useState(true)

    // Get random index for verseData
    function randomIndex(x) {
        return Math.floor(Math.random() * (x + 1));
    }

    // CHANGE TO SIGN IN
    function toggleSignUp(){
        setSignup(!signup)
    }

    // Fetch a random verse on component mount
    useEffect(() => {
        const NumOfVerses = verseData.length - 1;
        const randomVerse = verseData[randomIndex(NumOfVerses)];
        setRandomVerse(randomVerse); // Set the random verse to state
    }, []);

    return (
        <>
            <div className="flex h-screen ">
                <div className="mt-10 flex-1 ">
                    <div className="font-mont text-center mb-8">
                        {signup ? 'Already have an account?' : `Don't have an account?`  } <span className="font-poppins cursor-pointer" onClick={()=>{
                            toggleSignUp()
                        }}> {signup ? 'Login Now' : 'Create Account' }</span>
                    </div>
                    {signup ? (
                        <SignUp/>
                    ): (
                        <SignIn/>
                    )}
                </div>

                <div className="w-full h-full bg-black flex-1">
                    <div className="flex flex-col justify-start items-center m-auto text-white text-2xl font-mono h-full w-10/12 py-20">
                        <div className="flex justify-center mb-10">
                            <LogoSvg theme="white" />
                        </div>

                        {randomVerse && <Verse randomVerse={randomVerse} />} {/* Render Verse only if it exists */}
                    </div>
                </div>
            </div>
        </>
    );
}
