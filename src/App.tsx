import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './exports/componentsExport';
import Home from './pages/Home';
import './scss/app.scss';

const Basket = lazy(() => import('./pages/Basket'));
const ProductPage = lazy(() => import('./pages/ProductPage/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/basket"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Basket />
              </Suspense>
            }
          />

          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <ProductPage />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
