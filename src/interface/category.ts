import { ITrack } from './track';


export interface ICategory {
  id: number;
  items: ITrack[];
  name: string;
  owner: string;
}
