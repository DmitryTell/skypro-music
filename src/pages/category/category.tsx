import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { Title, Playlist } from '@components/';
import { ITrack, IOutletContext } from '@interface/';
import { useGetCategoryTracksQuery } from '@redux/';

import { selectionList } from './lib';


export const Category = () => {
  const params = useParams();

  const category = selectionList.find(({ id }) => id === Number(params.id));

  const [tracks, setTracks] = useState<ITrack[] | []>([]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const { setIsLoading } = useOutletContext<IOutletContext>();

  const { data, isLoading, error } = useGetCategoryTracksQuery(category?.id || 1);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (data) {
      const result = Object.values(data.items);

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
      <Title text={ category?.title || '' } />
      <Playlist
        isError={ errorText }
        isLoading={ isLoading }
        tracks={ tracks }
      />
    </>
  );
};
