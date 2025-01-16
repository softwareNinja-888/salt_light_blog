import logo from '/light/logo.webp'
export function About(){
    return(
        <>
            <div className="flex flex-col w-10/12 justify-center m-auto mt-10 dark:text-white gap-10">
                <div className="font-mono text-3xl underline">About Us</div>
                <div className="">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="font-roboto text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores vero deserunt numquam minus, ea quod error commodi nulla laboriosam ipsum sunt dicta enim quo quaerat officia fugiat debitis deleniti.
                </div>
            </div>
        </>
    )
}