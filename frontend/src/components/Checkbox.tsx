
const Checkbox = () => {
    return (
      <div className="flex pt-5 justify-center items-center">
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <span className="text-white">Male</span> 
            <input type="checkbox" className="h-5 w-5" />   
          </label>
          <label className="flex items-center gap-2">
            <span className="text-white">Female</span>
            <input type="checkbox" className="h-5 w-5" />
          </label>
        </div>
      </div>
    )
  }
  
  export default Checkbox