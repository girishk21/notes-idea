import { Outlet } from "react-router-dom";

const AppContainer = () => {
  return (
    <main className="grid grid-cols-12 gap-x-4 px-2">
      <Outlet />
    </main>
  );
};

export default AppContainer;
