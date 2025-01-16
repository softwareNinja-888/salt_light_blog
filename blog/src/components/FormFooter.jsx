import { useState } from "react";
export function FormFooter(){
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Subscribed:", subscribed);
    };
  
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-10/12 m-auto mt-12 ">

            {/* FIRST NAME  */}

            <label htmlFor="firstName" className="block text-gray-700 font-nunito text-sm dark:text-white">
                First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-3 py-2 border-b border-b-black rounded focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
              required
            /> 

            {/* LAST NAME  */}

            <label htmlFor="lastName" className="block text-gray-700 font-nunito text-sm dark:text-white">
                Last Name *
            </label>
            <input
              type="email"
              id="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-3 py-2 border-b border-b-black rounded focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
              required
            />

            {/* EMAIL */}

            <label htmlFor="email" className="block text-gray-700 font-nunito text-sm dark:text-white">
              Enter your email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 border-b border-b-black rounded focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
              required
            />

            {/* MESSAGE US  */}

            {/* <label htmlFor="message" className="block text-gray-700 mt-3 mb-1 dark:text-white">
                Write your message 
            </label>  */}
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none" >  
            </textarea>

            {/* SUBMIT FORM */}

            <button
              type="submit"
              className="w-full mt-3 bg-purple-600 text-white py-2 rounded font-lora hover:bg-purple-700 "
            >
              Subscribe
            </button>
        </form>
    );
}

