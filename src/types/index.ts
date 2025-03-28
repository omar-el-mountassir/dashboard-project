// Types pour les éléments de navigation
export interface NavItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

// Types pour les données des graphiques et tableaux
export interface OrderItem {
  id: string;
  item: string;
  customer: string;
  price: number;
  product: string;
  status: 'pending' | 'completed' | 'refunded';
}

export interface PerformanceMetric {
  name: string;
  value: number;
  color: string;
  percentage: number;
}

export interface DailyData {
  day: string;
  value: number;
  color: string;
}

export interface ProductData {
  name: string;
  quantity: number;
  color: string;
}

export interface AreaChartData {
  day: number;
  value1: number;
  value2: number;
  value3: number;
}
