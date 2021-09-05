import { ChartData } from './chart-data';

export interface ChartConfiguration {
  id: string;
  name: string;
  selected: boolean;
  data: ChartData[];
  color?: {
      name: string
      code: string
  };
}
