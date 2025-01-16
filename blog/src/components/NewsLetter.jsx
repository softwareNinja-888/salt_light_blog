import { Line } from "./Line"
import { SubscriptionForm } from "./SubscriptionForm"
export function NewsLetter(){
    return (
        <>
            <div className="mt-16 dark:text-white">
                <div className="">
                    <Line/>
                    <div className="py-8 text-center text-xl font-lora">Never Miss a New Post</div>
                    <Line/>
                </div>
                <div className="">
                    <SubscriptionForm/>
                </div>
                <div className="my-24">
                    <Line/>
                </div>
            </div>
        </>
    )
}