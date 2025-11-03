import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { DashboardPage } from '../features/inventory/pages/DashboardPage';
import { JSX } from 'react';
import App from '@/App';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    {/* <NavigatorInitializer /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}