import { Input } from "@src/util/util";
import {  EmailIcon, PasswordIcon } from "../../util/util";
import { useState } from "react";

export function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    
    // Handle form submission
    function handleSubmit() {
        alert('Submitted!!!!');
    }

    // Toggle password visibility
    function togglePassword() {
        setShowPassword(!showPassword);
    }
    return (
        <>
        
             <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
                <Input title='Email' type='email' placeholder='email@gmail.com' width='w-90' field={email} setField={setEmail} section='emailSignUp' styles='' IconRender={() => <EmailIcon />} />
                <Input title='Password' type={showPassword ? 'text' : 'password'} placeholder='Password' width='w-90' field={password} setField={setPassword} section='passwordSignUp' styles='' IconRender={() => <PasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} togglePassword={togglePassword} />} />
               
                <button aria-label="Submit Form" id="submit_form" type="submit" className="w-90 mt-3 border border-black text-black text-lg font-poppins py-2 cursor-pointer gap-2 transition duration-500 hover:scale-103 hover:bg-purple-500 hover:text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        "Log In"
                    )}
                </button>
            </form>
        </>
    )
}