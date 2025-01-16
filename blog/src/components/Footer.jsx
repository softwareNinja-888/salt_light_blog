import { FormFooter } from "./FormFooter";

export function Footer(){
    return (
        <div className="flex flex-col gap-10 mt-44">
            <FormFooter/>
            <div className="bg-gray-200 py-6">
                <div className="text-sm text-center">&copy; 2025 by Salt and Light Ministries</div>
            </div>
        </div>
    )
}