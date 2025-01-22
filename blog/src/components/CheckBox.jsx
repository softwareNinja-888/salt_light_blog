export function CheckBox(){
	return(
		<>
			<div className="form-control">
			  <label className="flex flex-row-reverse gap-2 cursor-pointer label">
			    <span className="label-text">Yes, subscribe me to newsletter.</span>
			    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
			  </label>
			</div>
		</>
	)
}