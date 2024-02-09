import * as Styled from './playlist-loading.styled';


export const PlaylistLoading = () => (
  <Styled.PlaylistLoadingList>
    { ['1', '2', '3', '4', '5', '6', '7', '8'].map((item) => (
      <Styled.PlaylistLoadingItem key={ item }>
        <Styled.PlaylistLoadingTrack>
          <Styled.PlaylistLoadingTrackTitle>
            <Styled.PlaylistLoadingTrackTitleImg />
            <Styled.PlaylistLoadingTrackTitleName />
          </Styled.PlaylistLoadingTrackTitle>
          <Styled.PlaylistLoadingTrackTitleAuthor />
          <Styled.PlaylistLoadingTrackTitleAlbum />
        </Styled.PlaylistLoadingTrack>
      </Styled.PlaylistLoadingItem>
    )) }
  </Styled.PlaylistLoadingList>
);
