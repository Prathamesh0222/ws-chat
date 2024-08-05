
interface ButtonProps {
    label: React.ReactNode,
    onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>,
    disabled?: boolean
    padding? : string
    className?: string
}

const Button = ({label,onClick,disabled,padding,className}:ButtonProps) => {
  return (
    <div className={padding}>
        <button 
        disabled={disabled}
        onClick={onClick}
        className={`bg-[#FFF] font-thin text-black text-md rounded-lg py-2.5 w-[42vh] ${className}`}
        >
            {label}
        </button>
    </div>
)
}

export default Button