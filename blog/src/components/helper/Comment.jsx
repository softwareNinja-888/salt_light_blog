

export function Comment({obj}){
	return (
		<>
			<div className='flex gap-5'>
				<div>
					<img src={obj.img} className='' alt='profile picture'/>
				</div>
				<div className='flex flex-col self-center'>
					<div className='font-poppins text-lg'>
						{obj.name}
					</div>
					<div>
						{obj.text}
					</div>
				</div>
			</div>
		</>
	)
}