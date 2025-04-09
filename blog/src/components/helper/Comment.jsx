import { GoReply } from "react-icons/go";


export function Comment({obj}){
	return (
		<>
			<div className='flex gap-5'>
				<div>
					<img src={obj.profile_picture} className='' alt='profile picture'/>
				</div>
				<div className='flex flex-col self-center gap-3'>
					<div className='flex flex-col gap-0'>
						<div className='font-poppins text-lg'>
							{obj.username}
						</div>
						<div className=''>
							{obj.date}
						</div>
					</div>

					<div className='flex gap-5'>
						{obj.text}
						<div>
							<GoReply/>
						</div>
					</div>
				</div>
			</div>
			{obj.replies.length > 0 ? (
				obj.replies.map(reply=>{
					return (
					 	<div key={reply.comment_id} className='px-20'>
						 	<Comment obj={reply}/>
						</div>
					 )
				})
				) : null}
		</>
	)
}