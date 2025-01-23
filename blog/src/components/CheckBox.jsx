export function CheckBox(){
	return(
		<>
			<div className="form-control">
			  <label className="flex flex-row-reverse gap-2 cursor-pointer label">
			    <span className="label-text font-mont">Yes, subscribe me to newsletter.</span>
			    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
			  </label>
			</div>
		</>
	)
}