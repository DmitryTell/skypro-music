import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Title, Filter, Playlist } from '@components/';
import { ITrack, IOutletContext } from '@interface/';
import { useAppDispatch, useAppSelector } from '@hook/';
import {
  useGetAllTracksQuery,
  getStateFilters,
  setAuthors,
  setGenres,
  setReleaseDates,
} from '@redux/';
import {
  getSearchedTracks,
  getFilteredByAuthors,
  getFilteredByGenres,
  sortTracksByDate,
} from '@utils/';


export const Home = () => {
  const dispatch = useAppDispatch();

  const {
    searchText,
    releaseDates,
    authorsFilter,
    genresFilter,
    dateFilter,
  } = useAppSelector(getStateFilters);

  const [tracks, setTracks] = useState<ITrack[] | []>([]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const { setIsLoading } = useOutletContext<IOutletContext>();

  const { data, isLoading, error } = useGetAllTracksQuery();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (
      data
      && !searchText
      && authorsFilter.length === 0
      && genresFilter.length === 0
      && !dateFilter
    ) {
      const result = Object.values(data);

      setTracks(result);

      dispatch(setAuthors({ tracks: result }));
      dispatch(setGenres({ tracks: result }));
      dispatch(setReleaseDates({ tracks: result }));
    }
  }, [
    authorsFilter.length,
    data,
    dispatch,
    genresFilter.length,
    searchText,
    dateFilter,
  ]);

  useEffect(() => {
    if (error) {
      const result = Object.values(error);

      setErrorText(result[1]);
    }
  }, [error]);

  useEffect(() => {
    if (searchText) {
      const result = getSearchedTracks(searchText, tracks);

      setTracks(result);
    }
  }, [searchText, tracks]);

  useEffect(() => {
    if (authorsFilter.length > 0 && data) {
      const result = getFilteredByAuthors(data, authorsFilter);

      setTracks(result);
    }
  }, [authorsFilter, data]);

  useEffect(() => {
    if (genresFilter.length > 0 && data) {
      const result = getFilteredByGenres(data, genresFilter);

      setTracks(result);
    }
  }, [data, genresFilter]);

  useEffect(() => {
    if (dateFilter) {
      const result = sortTracksByDate(tracks, releaseDates, dateFilter);

      setTracks(result);
    }
  }, [tracks, dateFilter, releaseDates]);

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
