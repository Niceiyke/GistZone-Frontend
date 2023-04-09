import { Footer } from "flowbite-react";
import LeftSideBar from "./LeftSideBar";
import MainFeed from "./MainFeed";
import RightSideBar from "./RightSideBar";


function Layout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 md:gap-2">
      <div className="p-4 bg-secondary md:col-span-4 md:order-first">
        <LeftSideBar />
      </div>

      <div className="order-first p-4 md:col-span-6">
        <MainFeed />
      </div>

      <div className="p-4 bg-secondary md:col-span-2 md:order-last">
        <RightSideBar />
      </div>
    </div>
  );
}

export default Layout;
