import { useState } from 'react';

import { Title, Filter, Playlist } from '@components/';
import { ITrack } from '@interface/';


export const Home = () => {
  const [tracks, setTracks] = useState<ITrack[] | []>([]);

  return (
    <>
      <Title text="Треки" />
      <Filter />
      <Playlist isLoading tracks={ tracks } />
    </>
  );
};
