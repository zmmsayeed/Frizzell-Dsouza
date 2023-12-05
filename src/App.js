import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css';

// importing pages
import MainPage from './pages/MainPage';
import EmailDashboard from "./pages/EmailDashboard";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/email-dashboard" element={<EmailDashboard />} />
                <Route path="/login" element={<Login />} />

                {/*<Route index element={<Home />} />*/}
                {/*<Route path="blogs" element={<Blogs />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
                {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
        </BrowserRouter>
        {/*<MainPage />*/}
    </div>
  );
}

export default App;
