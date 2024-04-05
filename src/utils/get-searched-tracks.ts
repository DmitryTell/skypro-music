import { ITrack } from '@interface/';


export const getSearchedTracks = (searchText: string, tracks: ITrack[]) => {
  const result: ITrack[] = [];
  const regSearching = new RegExp(`${searchText}`, 'gi');

  tracks.forEach((track) => {
    if (regSearching.test(track.name)) {
      result.push(track);
    }
  });

  return result;
};
