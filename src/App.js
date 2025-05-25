import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import RecentIrrigations from "./pages/RecentIrrigations";
import AutoIrrigationConfig from "./pages/AutoIrrigationConfig";
import HumidityBar from "./pages/HumidityBar";
import TopBar from "./components/TopBar";

function BottomNav() {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "text-blue-600" : "text-gray-500";

  return (
    <nav className="w-full flex justify-around bg-white shadow border-t py-3 absolute bottom-0 z-10">
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

function Layout() {
  return (
    <>
      <TopBar />
      <main className="pt-16 pb-20 overflow-y-auto h-full">
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recentIrrigations" element={<RecentIrrigations />} />
          <Route
            path="/autoIrrigationConfig"
            element={<AutoIrrigationConfig />}
          />
          <Route path="/humidityBar" element={<HumidityBar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
