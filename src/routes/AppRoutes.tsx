import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { LoginPage } from '@/features/auth/pages/LoginPage';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <MainLayout>
                <div>Dashboard (Usuario logueado)</div>
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}