
interface ButtonProps {
    label: string,
    onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>
}

const Button = ({label,onClick}:ButtonProps) => {
  return (
    <div className="pt-1 pb-2">
        <button 
        onClick={onClick}
        className="bg-[#FFF] font-thin text-black text-md rounded-lg py-2 w-[42vh]"
        >
            {label}
        </button>
    </div>
)
}

export default Button