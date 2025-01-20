export function BlogOfWeek(){
    return (
        <>
            <div className="flex bg-blogBackground bg-center bg-cover bg-no-repeat h-60 px-5 py-5 relative w-10/12">
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                <div className="flex flex-col gap-4 relative z-10 justify-center">
                    <div className="text-white font-poppins text-lg">Blog of the Week</div>
                    <div className="text-white font-mono text-md">Power of Prayer: What I am reading this year.</div>
                    <div className="font-nunito text-black border border-white w-7/12 flex justify-center px-6 py-2 bg-white ">Read More</div>
                </div>
            </div>
        </>
    )
}