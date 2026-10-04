import React, { useState } from 'react';
import './config/i18n';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';

const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      <main>
        <Home 
          isJoinModalOpen={isJoinModalOpen}
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          onCloseJoinModal={() => setIsJoinModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default App;
