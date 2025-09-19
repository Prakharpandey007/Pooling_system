import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/loginPage/LoginPage";
import StudentLandingPage from "./Pages/student-landing/StudentLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student-home-page" element={<StudentLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
