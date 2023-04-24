import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import Nav from "./Nav";

export const Layout: React.FC<{}> = () => {
  return (
    <div>
      <Nav />
      <div className="mb-16">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};
