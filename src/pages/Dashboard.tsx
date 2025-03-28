import React from 'react';

/**
 * Page principale du Dashboard
 * Pour l'instant, c'est juste un placeholder qui sera enrichi avec les autres composants
 */
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Monthly Summary</h1>
      <div className="bg-bg-primary bg-opacity-30 p-6 rounded-lg shadow-sm">
        <p className="text-text-secondary">
          Cette page sera enrichie avec les autres composants du dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
