import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Title, Filter, Playlist } from '@components/';
import { ITrack, IOutletContext } from '@interface/';
import { useGetAllTracksQuery } from '@redux/';


export const Home = () => {
  const [tracks, setTracks] = useState<ITrack[] | []>([]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const { setIsLoading } = useOutletContext<IOutletContext>();

  const { data, isLoading, error } = useGetAllTracksQuery();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (data) {
      const result = Object.values(data);

      setTracks(result);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const result = Object.values(error);

      setErrorText(result[1]);
    }
  }, [error]);

  return (
    <>
      <Title text="Треки" />
      <Filter />
      <Playlist
        isError={ errorText }
        isLoading={ isLoading }
        tracks={ tracks }
      />
    </>
  );
};
