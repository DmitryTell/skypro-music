import { ReactComponent as Volume } from '@assets/icon/Volume.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getStatePlaylist, setVolume } from '@redux/';

import * as Styled from './volume-bar.styled';


export const VolumeBar = () => {
  const dispatch = useAppDispatch();

  const { volume } = useAppSelector(getStatePlaylist);

  return (
    <Styled.VolumeBarContainer>
      <Styled.VolumeBarContent>
        <Styled.VolumeBarImg>
          <Volume />
        </Styled.VolumeBarImg>
        <Styled.VolumeBarProgress>
          <Styled.VolumeBarProgressLine
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
