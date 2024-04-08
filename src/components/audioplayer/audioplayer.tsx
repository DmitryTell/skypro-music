import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';

import { ProgressBar, ControlBar, VolumeBar } from './ui';
import { Audio } from './audio';
import * as Styled from './audioplayer.styled';


export const Audioplayer = () => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <>
      <Audio />
      <Styled.PlayerContainer
        $background={ isDarkTheme ? 'rgba(28, 28, 28, 0.5)' : 'rgb(255, 255, 255, 0.5)' }
      >
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
};
