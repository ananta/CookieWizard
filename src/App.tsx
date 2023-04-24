import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./routes/Home";
import { Settings } from "./routes/Settings";
import ErrorPage from "./routes/Error";

export const HOME_ROUTE = "/popup.html";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);
