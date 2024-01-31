import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OtpPage from './otp/Index';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otp-autocomplete" element={<OtpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
