export function Verse({randomVerse}){
    console.log(randomVerse)
    return (
        <>
            <blockquote className="flex flex-col gap-3 font-lora">
                &#34;{randomVerse.text}&#34;
                <footer className='text-lg font-roboto'>- {randomVerse.book} {randomVerse.chapter} {randomVerse.version}</footer>
            </blockquote>
        </>
    )
}