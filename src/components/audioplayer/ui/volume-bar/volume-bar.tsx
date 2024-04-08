import { ReactComponent as Volume } from '@assets/icon/Volume.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getStatePlaylist, setVolume, getStateMenu } from '@redux/';

import * as Styled from './volume-bar.styled';


export const VolumeBar = () => {
  const dispatch = useAppDispatch();

  const { volume } = useAppSelector(getStatePlaylist);
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.VolumeBarContainer>
      <Styled.VolumeBarContent>
        <Styled.VolumeBarImg $fill={ isDarkTheme ? '#fff' : '#B1B1B1' }>
          <Volume />
        </Styled.VolumeBarImg>
        <Styled.VolumeBarProgress>
          <Styled.VolumeBarProgressLine
            $bgColor={ isDarkTheme ? '#797979' : '#C4C4C4' }
            $color={ isDarkTheme ? '#fff' : '#AD61FF' }
            max={ 100 }
            min={ 0 }
            step={ 0.01 }
            type="range"
            value={ volume }
            onChange={ (e) => dispatch(setVolume({ volume: +e.target.value })) }
          />
        </Styled.VolumeBarProgress>
      </Styled.VolumeBarContent>
    </Styled.VolumeBarContainer>
  );
};
