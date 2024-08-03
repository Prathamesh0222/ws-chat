interface HeadingProps {
    label: string;
}

export const Heading= ({label}:HeadingProps) => {
    return <div className="pt-2 text-2xl font-semibold text-white">
        {label}
    </div>
}