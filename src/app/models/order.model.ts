export interface Order {
  id: number;
  dishIds: number[];
  state: string;
  date: Date;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  telephone: number;
  email: string;
}
