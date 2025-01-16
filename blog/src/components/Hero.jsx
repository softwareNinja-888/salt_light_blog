import {Search} from './Search'
import { Line } from './Line'
export function Hero(){
	return (
		<>
			<div className='flex flex-col gap-10 w-screen py-10'>
				<div className="flex flex-col gap-3 dark:text-white">
					<div className="text-3xl text-center font-lora">Leap of Faith</div>
					<div className="text-lg text-center font-mono">Trusting God is a lifelong journey. Dont travel alone</div>
				</div>
				<Search/>
			</div>
			<Line/>
		</>

	)
}