import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './config/i18n';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';

const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Set the basename dynamically based on your Vite base path or subfolder
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
        
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isJoinModalOpen={isJoinModalOpen}
                  onOpenJoinModal={() => setIsJoinModalOpen(true)}
                  onCloseJoinModal={() => setIsJoinModalOpen(false)}
                />
              }
            />
            {/* Catch-all redirect back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;