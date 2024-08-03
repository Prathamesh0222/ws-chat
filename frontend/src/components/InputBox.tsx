
interface InputBoxProps {
    label? : string
    placeholder: string,
    type?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const InputBox  = ({label,placeholder,type,onChange}:InputBoxProps) => {
  return (
    <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-[42vh]">
    <div className="text-white text-left py-2.5 pl-1 text-md font-semibold">
        {label}
    </div>
        <input 
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="rounded-lg bg-[#0F0F10] border border-white border-opacity-20 text-md text-white text-left py-2.5 h-max px-4"
        />
    </div>
    </div>
  )
}

export default InputBox