import { TbLogout } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="px-4 pt-3 pb-2">
      {!loading ? (
        <TbLogout onClick={logout} className="text-2xl text-white hover:text-blue-500 cursor-pointer" />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;
