import { ITrack } from '@interface/';


export const addStaredUser = (allTracks: ITrack[], favouriteTracks: ITrack[]) => {
  const result: ITrack[] = [];

  allTracks.forEach((track) => {
    const favourite = favouriteTracks.find((favouriteTrack) => track.id === favouriteTrack.id);

    if (favourite) {
      result.push(track);
    }
  });

  return result;
};
