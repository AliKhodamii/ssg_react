import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import RecentIrrigations from "./pages/RecentIrrigations";
import AutoIrrigationConfig from "./pages/AutoIrrigationConfig";
import HumidityBar from "./pages/HumidityBar";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import usePolling from "./com/UsePolling";

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
  const { data, error } = usePolling(
    "https://sed-smarthome.ir/ssg/backend/api/web/status.php"
  );

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home data={data} />} />
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
