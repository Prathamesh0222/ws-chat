type SubHeadingProps = {
  label: string;
};

const SubHeading = ({ label }: SubHeadingProps) => {
  return <div className="text-white font-thin text-sm pt-1 pb-2">{label}</div>;
};

export default SubHeading;
