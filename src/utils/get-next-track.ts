import { ITrack } from '@interface/';


export const getNextTrack = (currentTrack: ITrack | null, playlist: ITrack[]) => {
  if (currentTrack) {
    let currentIndex = null;

    playlist.forEach((track, index) => {
      if (track.id === currentTrack.id) {
        currentIndex = index;
      }
    });

    if (currentIndex !== null) {
      const newTrack = playlist[currentIndex + 1];

      return newTrack || playlist[0];
    }
  }

  return playlist[0];
};
