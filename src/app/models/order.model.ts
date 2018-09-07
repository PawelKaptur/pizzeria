export interface Order {
  id: number;
  dishIds: number[];
  address: string;
  state: string;
  date: string;
  firstName: string;
  lastName: string;
}
