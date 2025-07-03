import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { LoadingSpinner } from "../components/loading";

const HomePage = lazy(() => import("../pages/home-page"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
