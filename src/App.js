import {Route, Routes} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import AppLayout from "./layout/AppLayout";
import AllPage from "./pages/AllPage/AllPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}> {/*네브바*/}
          <Route index element={<Homepage />} />
          <Route path="all">
            <Route index element={<AllPage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
