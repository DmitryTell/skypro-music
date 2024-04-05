import { ITrack } from '@interface/';


const sortTracks = (tracks: ITrack[], releaseDates: string[]) => {
  const result: ITrack[] = [];

  releaseDates.forEach((date) => {
    tracks.forEach((track) => {
      if (date === track.release_date) {
        result.push(track);
      }
    });
  });

  return result;
};

export const sortTracksByDate = (tracks: ITrack[], releaseDates: string[], dateFilter: string | null) => {
  if (dateFilter === 'first_old') {
    const firstOldDates = [...releaseDates].sort();

    return sortTracks(tracks, firstOldDates);
  }

  const firstNewDates = [...releaseDates].sort((a, b) => (b.localeCompare(a)));

  return sortTracks(tracks, firstNewDates);
};
