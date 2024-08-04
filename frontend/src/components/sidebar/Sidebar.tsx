import Conversations from "./Conversations";
import Logout from "./Logout";
import Searchbox from "./Searchbox";


const Sidebar = () => {
	return (
		<div className="flex flex-col justify-center">
			<div className="rounded-l-lg border border-white border-opacity-15 bg-gray-900">
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<Searchbox />
			<div className='divider m-[15px] px-3'></div>
			<Conversations />
			<Logout />
		</div>
		</div>
		</div>
	);
};
export default Sidebar;