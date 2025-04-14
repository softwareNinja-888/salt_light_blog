import { useState } from "react";
import { useTheme } from "../helper/ThemeContext";
import { LogoSvg } from "../helper/LogoSvg";
import { Input} from "@src/util/util";
import { NameIcon } from "../../util/util";

// const InputBox = ({ type, placeholder, name }) => {
//     return (
//       <div className="mb-6">
//         <input
//           type={type}
//           placeholder={placeholder}
//           name={name}
//           className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
//         />
//       </div>
//     );
//   };
  
  
export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [passwordConfirm,setPasswordConfirm] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({})

    function handleSubmit(){
        alert('Submitted!!!!')
    }

    return (
        <>

            <div className="">
                <div className="border-2 border-fuchsia-400">
                    <div className="">
                        <LogoSvg/>
                    </div>
                    <div className="">
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit.</div>
                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <Input title='Name' type='text' placeholder='John Doe' width='w-90' field={name}setField={setName} section='nameSignUp' styles=''/>
                            <Input title='Email' type='email' placeholder='email@gmail.com' width='w-90' field={email}setField={setEmail} section='emailSignUp' styles=''/>
                            <Input title='Password' type='password' placeholder='Password' width='w-90' field={password}setField={setPassword} section='passwordSignUp' styles=''/>
                            <Input title='Confirm Password' type='password' placeholder='Confirm password' width='w-90' field={passwordConfirm}setField={setPasswordConfirm} section='passwordSignUp' styles=''/>
                            <button aria-label="Submit Form" id="submit_form" type="submit" className="w-90  mt-3 border border-black text-black text-lg font-poppins py-2 cursor-pointer  gap-2 transition duration-500 hover:scale-103 hover:bg-purple-500 hover:text-white" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-purple-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-100"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    );
};

