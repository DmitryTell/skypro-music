import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';

import * as Styled from './playlist-loading.styled';


export const PlaylistLoading = () => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.PlaylistLoadingList>
      { ['1', '2', '3', '4', '5', '6', '7', '8'].map((item) => (
        <Styled.PlaylistLoadingItem key={ item }>
          <Styled.PlaylistLoadingTrack>
            <Styled.PlaylistLoadingTrackTitle>
              <Styled.PlaylistLoadingTrackTitleImg $isDarkTheme={ isDarkTheme } />
              <Styled.PlaylistLoadingTrackTitleName $isDarkTheme={ isDarkTheme } />
            </Styled.PlaylistLoadingTrackTitle>
            <Styled.PlaylistLoadingTrackTitleAuthor $isDarkTheme={ isDarkTheme } />
            <Styled.PlaylistLoadingTrackTitleAlbum $isDarkTheme={ isDarkTheme } />
          </Styled.PlaylistLoadingTrack>
        </Styled.PlaylistLoadingItem>
      )) }
    </Styled.PlaylistLoadingList>
  );
};
