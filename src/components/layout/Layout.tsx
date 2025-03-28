import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout principal de l'application
 * Intègre la sidebar et le contenu principal
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-bg-primary">
      <Sidebar />
      <main className="flex-1 ml-sidebar">
        <div className="container p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
