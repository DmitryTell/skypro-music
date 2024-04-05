import { ITrack } from '@interface/';


export const getFilteredByGenres = (tracks: ITrack[], genresFilter: string[]) => {
  const result: ITrack[] = [];

  tracks.forEach((track) => {
    if (genresFilter.includes(track.genre)) {
      result.push(track);
    }
  });

  return result;
};
