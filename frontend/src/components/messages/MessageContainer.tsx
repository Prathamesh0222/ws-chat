import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const NoChatSelected = () => {
  return <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome John Doe</p>
        <p>Select a chat to start messaging</p>
      </div>
      <TiMessages className="text-3xl md:text-6xl text-center"/>
  </div>
}

const MessageContainer = () => {
  const NoChat = false;
	return (
    <div className="flex flex-col justify-center h-screen">
      <div className="rounded-r-lg border border-white border-opacity-15 bg-gray-900">
		<div className='min-w-[450px] flex flex-col mx-auto h-[700px]'>
			{NoChat ? <NoChatSelected /> : <>
				<div className='bg-slate-600 w-full px-4 py-2 mb-2 rounded-r-lg'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>
        <div className="flex-1 overflow-auto">
				<Messages />
        </div>
        <MessageInput/>
			</>}
		</div>
    </div>
    </div>
	);
};
export default MessageContainer;


