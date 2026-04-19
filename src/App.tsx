import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppleSignInPage from './pages/AppleSignInPage.tsx'
import BillingPage from './pages/BillingPage.tsx'
import ICloudHomePage from './pages/ICloudHomePage.tsx'
import OrderDetailsPage from './pages/OrderDetailsPage.tsx'
import OrderCancelPage from './pages/OrderCancelPage.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BillingPage />} />
        <Route path="/icloud" element={<ICloudHomePage />} />
        <Route path="/signup" element={<AppleSignInPage />} />
        <Route path="/order" element={<OrderDetailsPage />} />
        <Route path="/cancel" element={<OrderCancelPage />} />
      </Routes>
    </BrowserRouter>
  )
}
