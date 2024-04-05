import { ITrack } from '@interface/';


export const getFilteredByAuthors = (tracks: ITrack[], filter: string[]) => {
  const result: ITrack[] = [];

  tracks.forEach((track) => {
    if (filter.includes(track.author)) {
      result.push(track);
    }
  });

  return result;
};
