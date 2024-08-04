import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
