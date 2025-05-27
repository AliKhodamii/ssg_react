import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "text-blue-600" : "text-gray-500";

  return (
    <nav
      dir="rtl"
      className="w-full flex justify-around bg-white shadow border-t py-3 absolute bottom-0 z-10"
    >
      <Link className={active("/")} to="/">
        🏠
      </Link>
      <Link className={active("/recentIrrigations")} to="/recentIrrigations">
        🌡️
      </Link>
      <Link
        className={active("/autoIrrigationConfig")}
        to="/autoIrrigationConfig"
      >
        💧
      </Link>
      <Link className={active("/humidityBar")} to="/humidityBar">
        ⚙️
      </Link>
    </nav>
  );
}
