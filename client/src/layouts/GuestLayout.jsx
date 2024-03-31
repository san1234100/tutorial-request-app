import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

function GuestLayout() {
  return (
    <>
      <TheNavbar />
      <main className="p-10">
        <Outlet />
      </main>
    </>
  );
}

export default GuestLayout;
