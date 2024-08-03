import { Link } from "react-router-dom"

interface BottomProps {
    label: string,
    to: string,
    buttonText: string
}

const Bottom = ({label,to,buttonText}:BottomProps) => {
  return (
    <div className="text-white">
    <div className="py-2 text-sm flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {buttonText}
        </Link>
    </div>
    </div>
  )
}

export default Bottom