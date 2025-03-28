import { NavItem, OrderItem, PerformanceMetric, DailyData, ProductData, AreaChartData } from '../types';
import { 
  MdDashboard, MdAssessment, MdArchive, MdPeople, MdDescription, 
  MdStar, MdBuild, MdSettings 
} from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';

// Données de navigation
export const navItems: NavItem[] = [
  { id: 'dashboard', title: 'Dashboard', icon: MdDashboard.name, path: '/', isActive: true },
  { id: 'reports', title: 'Reports', icon: MdAssessment.name, path: '/reports' },
  { id: 'archive', title: 'Archive', icon: MdArchive.name, path: '/archive' },
  { id: 'social', title: 'Social', icon: BsChatLeftText.name, path: '/social' },
  { id: 'users', title: 'Users', icon: MdPeople.name, path: '/users' },
  { id: 'documents', title: 'Documents', icon: MdDescription.name, path: '/documents' },
  { id: 'favorites', title: 'Favorites', icon: MdStar.name, path: '/favorites' },
  { id: 'tools', title: 'Tools', icon: MdBuild.name, path: '/tools' },
  { id: 'settings', title: 'Settings', icon: MdSettings.name, path: '/settings' },
];

// Données pour le graphique principal (Area Chart)
export const areaChartData: AreaChartData[] = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value1: Math.floor(Math.random() * 50) + 30,
  value2: Math.floor(Math.random() * 40) + 20,
  value3: Math.floor(Math.random() * 30) + 10,
}));

// Point important dans les données (Monday 9 April)
areaChartData[8] = {
  ...areaChartData[8],
  value1: 65,
  value2: 45,
  value3: 25,
};

// Données pour les indicateurs de performance
export const performanceMetrics: PerformanceMetric[] = [
  { name: 'New Costumers', value: 15, color: '#9B59B6', percentage: 15 },
  { name: 'Sales', value: -20, color: '#34495E', percentage: -20 },
  { name: 'Refound', value: -35, color: '#3498DB', percentage: -35 },
];

// Données pour le tableau des commandes
export const ordersData: OrderItem[] = [
  { id: '1', item: 'HTC Mobile', customer: 'Alan B', price: 438, product: 'B-ZTF', status: 'pending' },
  { id: '2', item: 'Samsung Mobile', customer: 'Joe Smith', price: 680, product: 'C-567', status: 'completed' },
  { id: '3', item: 'Apple Mobile', customer: 'Patrick J', price: 680, product: 'E-567', status: 'completed' },
  { id: '4', item: 'LG Mobile', customer: 'Anna Han', price: 340, product: 'Z-423', status: 'refunded' },
  { id: '5', item: 'Nokia Mobile', customer: 'Mark Mule', price: 230, product: 'W-225', status: 'pending' },
];

// Données pour le graphique à barres hebdomadaire
export const weeklyBarData: DailyData[] = [
  { day: 'MON', value: 400, color: '#3498DB' },
  { day: 'TUE', value: 300, color: '#3498DB' },
  { day: 'WED', value: 500, color: '#9B59B6' },
  { day: 'THU', value: 280, color: '#3498DB' },
  { day: 'FRI', value: 590, color: '#3498DB' },
  { day: 'SAT', value: 350, color: '#9B59B6' },
  { day: 'SUN', value: 200, color: '#3498DB' },
];

// Données pour les widgets de produits
export const productsData: ProductData[] = [
  { name: 'HTC', quantity: 450, color: '#3498DB' },
  { name: 'Nokia', quantity: 657, color: '#3498DB' },
  { name: 'LG', quantity: 1200, color: '#9B59B6' },
  { name: 'Samsung', quantity: 1800, color: '#9B59B6' },
  { name: 'Apple', quantity: 2400, color: '#3498DB' },
];
