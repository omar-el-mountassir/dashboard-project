import React from 'react';
import { NavItem } from '../../types';
import { navItems } from '../../data/mockData';
import { 
  MdDashboard, MdAssessment, MdArchive, MdPeople, MdDescription, 
  MdStar, MdBuild, MdSettings, MdSearch 
} from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';

// Mapping des noms d'icônes aux composants d'icônes
const iconMap: Record<string, React.ElementType> = {
  'MdDashboard': MdDashboard,
  'MdAssessment': MdAssessment,
  'MdArchive': MdArchive,
  'BsChatLeftText': BsChatLeftText,
  'MdPeople': MdPeople,
  'MdDescription': MdDescription,
  'MdStar': MdStar,
  'MdBuild': MdBuild,
  'MdSettings': MdSettings,
};

const Sidebar: React.FC = () => {
  // Fonction pour rendre l'icône à partir du nom
  const renderIcon = (iconName: string): React.ReactNode => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="sidebar-icon" /> : null;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-sidebar bg-bg-sidebar shadow-lg z-10">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <div className="flex items-center">
          <MdDashboard className="text-accent-primary text-2xl mr-2" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
      </div>
      
      <nav className="py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.path}
                className={`sidebar-link ${item.isActive ? 'active' : ''}`}
              >
                {renderIcon(item.icon)}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-gray-700 bg-opacity-50 rounded-md py-2 pl-10 pr-4 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-accent-primary"
          />
          <MdSearch className="absolute left-3 top-2.5 text-text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
