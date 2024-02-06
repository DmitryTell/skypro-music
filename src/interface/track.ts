import { IUser } from './user';


export interface ITrack {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string;
  track_file: string;
  stared_user: IUser[];
}
