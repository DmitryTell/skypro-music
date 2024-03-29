import { ITrack } from '@interface/';


export const getPrevTrack = (currentTrack: ITrack | null, playlist: ITrack[]) => {
  if (currentTrack) {
    let currentIndex = null;

    playlist.forEach((track, index) => {
      if (track.id === currentTrack.id) {
        currentIndex = index;
      }
    });

    if (currentIndex !== null) {
      const newTrack = playlist[currentIndex - 1];

      return newTrack || playlist[playlist.length - 1];
    }
  }

  return playlist[playlist.length - 1];
};
