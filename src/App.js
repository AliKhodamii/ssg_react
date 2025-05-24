import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import RecentIrrigations from "./pages/RecentIrrigations";
import AutoIrrigationConfig from "./pages/AutoIrrigationConfig";
import HumidityBar from "./pages/HumidityBar";

function BottomNav() {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "text-blue-500" : "text-gray-500";

  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-white shadow py-2">
      <Link className={active("/")} to="/">
        🏠
      </Link>
      <Link className={active("/sensors")} to="/sensors">
        🌡️
      </Link>
      <Link className={active("/valves")} to="/valves">
        💧
      </Link>
      <Link className={active("/settings")} to="/settings">
        ⚙️
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="pb-16">
        {" "}
        {/* Leave space for bottom nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sensors" element={<RecentIrrigations />} />
          <Route path="/valves" element={<AutoIrrigationConfig />} />
          <Route path="/settings" element={<HumidityBar />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
