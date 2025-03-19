export function Quote(){
	return (
		<>
		<div className="flex gap-5 h-32">
			<div className="w-2 h-full bg-purple-600"></div>

			{/*ADD MAX LENGTH FOR QUOTE SECTION IN DATA STRUCTURE */}
			<div className="flex flex-col self-center text-xl font-lora">
				"Success is the sum of small efforts, repeated day in and day out." <span className="font-poppins text-sm">— Robert Collier</span>
			</div>
		</div>
		</>
		)
}