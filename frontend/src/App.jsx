import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Transactions from "./pages/Transactions";
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <>
      <SkeletonTheme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sendmoney" element={<SendMoney />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/paymentdone/:name" element={<PaymentSuccess />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
