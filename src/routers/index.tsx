import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { LoadingSpinner } from "../components/loading";

const HomePage = lazy(() => import("../pages/home-page"));

const RootLayout = lazy(() => import("../components/layout/root-layout"));
const ProductsLayout = lazy(
  () => import("../components/layout/products-layout")
);
const AdminLayout = lazy(() => import("../components/layout/admin-layout"));

const ProductsListPage = lazy(() => import("../pages/product-list-page"));
const ProductDetailPage = lazy(() => import("../pages/product-detail-page"));
const CategoryPage = lazy(() => import("../pages/category-page"));
const SearchPage = lazy(() => import("../pages/search-page"));

const AdminProductsPage = lazy(() => import("../pages/admin-products-page"));
const AddProductPage = lazy(() => import("../pages/add-product-page"));
const EditProductPage = lazy(() => import("../pages/edit-product-page"));

const AppRoutes = () => {
  const ErrorBoundary = () => {
    return <h3>Oops! Ada yang salah.</h3>;
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorBoundary />}
        >
          <Route index element={<HomePage />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductsListPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>

          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="admin" element={<AdminLayout />}>
            <Route path="products">
              <Route index element={<AdminProductsPage />} />
              <Route path="new" element={<AddProductPage />} />
              <Route path=":id/edit" element={<EditProductPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
