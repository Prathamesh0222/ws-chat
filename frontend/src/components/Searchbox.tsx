import { FaSearch } from "react-icons/fa";
const Searchbox = () => {
    return (
      <div className="flex h-screen justify-center">
        <div className="flex flex-col justify-center">
        <div className="border border-white border-opacity-15 rounded-lg bg-[#18181B] w-full text-left p-4">
          <div className="flex items-center gap-2">
            <input
            placeholder="Search.."
            className="text-white w-[24vh] p-2 focus:outline-none focus:ring focus:border-blue-500 rounded-lg bg-[#0F0F10] h-max"
            />
            <div>
            <button className="w-10 h-10 rounded-full p-2 bg-blue-400 hover:bg-blue-700 text-white flex items-center justify-center">    
                <FaSearch/>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }

export default Searchbox