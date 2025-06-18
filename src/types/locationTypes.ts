export interface ILocation {
  id: number;
  name: string;
  stores: IStore[];
  description: string;
}

export interface IStore {
  address: string;
  hours: string;
  point: number[];
  name: string;
}
