import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { DashboardPage } from '../features/inventory/pages/DashboardPage';
import { SettingsPage } from '@/features/settings/pages/SettingsPage';
import { JSX } from 'react';
import App from '@/App';
import DashboardLayout from '@/app/layouts/DashboardLayout';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/login"
        element={
          <LoginPage />
        }
      />
      <Route 
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          </PrivateRoute>
        }
      >
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route index element={<Navigate to="dashboard" />} />
      </Route>
      <Route path='*' element={<Navigate to="/notFound" />} />
    </Routes>
  );
}