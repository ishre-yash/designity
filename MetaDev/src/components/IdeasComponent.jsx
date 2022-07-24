import Post from "../components/Post";
import SideBar from "../containers/SideBar";
import Navbar from "./Navbar";

const IdeasComponent = () => (
  <>
    <Navbar />
    <SideBar />
    <main className="w-main pl-[17.5rem] bg-[#f8f8f8]">
      <div className=" p-0 flex justify-center ">
        <div className=" post-margin-left w-full max-w-[44rem]">
          <Post />
        </div>
        <div className="my-4 ml-[1.2rem] mr-4 max-w-[18.625rem] border-[#ebedf1] border-2 rounded-2xl post-margin-right bg-white  w-full" />
      </div>
    </main>
  </>
);

export default IdeasComponent;
