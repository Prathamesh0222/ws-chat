
interface ButtonProps {
    label: string,
    onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>
}

const Button = ({label,onClick}:ButtonProps) => {
  return (
    <div className="py-4">
        <button 
        onClick={onClick}
        className="bg-[#FFF] font-thin text-black text-md rounded-lg py-1.5 w-[42vh]"
        >
            {label}
        </button>
    </div>
)
}

export default Button