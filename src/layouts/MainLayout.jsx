import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const MainLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes("signup") || path.includes("login")) {
    return <Outlet />;
  }

  const isEditorPage = path === "/editor";

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {!isEditorPage && <Sidebar />}
      <main className="flex-1 flex flex-col overflow-x-hidden">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        {!isEditorPage && <footer className="mt-auto"></footer>}
      </main>
    </div>
  );
};

export default MainLayout;
