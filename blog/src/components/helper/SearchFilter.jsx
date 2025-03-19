export function SearchFilter(){
    return (
        <div className="w-11/12 max-w-sm mx-auto">  
            <div className="join w-full ">
                <div>
                    <div>
                        <input className="input input-bordered join-item  max-w-sm" placeholder="Search Blogs" />
                    </div>
                </div>
                <select className="select select-bordered join-item max-w-sm">
                    <option disabled selected>Filter </option>
                    <option value="">Sci-fi </option>
                    <option value="">Drama </option>
                    <option value="">Actio</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item">Search</button>
                </div>
            </div>
        </div>
    )
}