// src/App.js
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider, Button } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from './scenes/login';
import { AuthProvider } from './context/AuthContext';
import Trendspage from "./scenes/trendspage";
import ProtectedForm from './scenes/protectedForm';
import About from './scenes/about';
import { useTranslation } from "react-i18next";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar] = useState(true);
  const { i18n } = useTranslation(); // Translation hook

  const toggleLanguage = () => {
    // Toggle between 'en' and 'hi'
    const newLanguage = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              {/* Language Toggle Button */}
              {/* <Button
                variant="contained"
                onClick={toggleLanguage}
                style={{ position: 'absolute', top: 10, right: 10 }}
              >
                {i18n.language === 'en' ? 'हिन्दी' : 'English'}
              </Button> */}

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<ProtectedForm />} />
                <Route path="/trendspage" element={<Trendspage />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  );
}

export default App;
