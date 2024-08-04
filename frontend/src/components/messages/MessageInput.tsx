import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <div className='px-4 py-2'>
            <div className='relative w-full'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    <BsSend />
                </button>
            </div>
        </div>
    );
};
export default MessageInput;