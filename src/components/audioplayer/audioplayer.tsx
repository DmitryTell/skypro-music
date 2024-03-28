import { ProgressBar, ControlBar, VolumeBar } from './ui';
import { Audio } from './audio';
import * as Styled from './audioplayer.styled';


export const Audioplayer = () => (
  <>
    <Audio />
    <Styled.PlayerContainer>
      <Styled.PlayerContent>
        <ProgressBar />
        <Styled.PlayerBlock>
          <ControlBar />
          <VolumeBar />
        </Styled.PlayerBlock>
      </Styled.PlayerContent>
    </Styled.PlayerContainer>
  </>
);
