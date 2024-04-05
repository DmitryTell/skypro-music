import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Title, Playlist } from '@components/';
import { ITrack, IOutletContext } from '@interface/';
import { useGetAllFavouriteTracksQuery, useGetAllTracksQuery } from '@redux/';
import { addStaredUser } from '@utils/';


export const Favourite = () => {
  const [tracks, setTracks] = useState<ITrack[] | []>([]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const { setIsLoading } = useOutletContext<IOutletContext>();

  const { data: allTracks } = useGetAllTracksQuery();
  const { data, isLoading, error } = useGetAllFavouriteTracksQuery();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (data && allTracks) {
      const result = addStaredUser(allTracks, Object.values(data));

      setTracks(result);
    }
  }, [allTracks, data]);

  useEffect(() => {
    if (error) {
      const result = Object.values(error);

      setErrorText(result[1]);
    }
  }, [error]);

  return (
    <>
      <Title text="Мои треки" />
      <Playlist
        isError={ errorText }
        isLoading={ isLoading }
        tracks={ tracks }
      />
    </>
  );
};
