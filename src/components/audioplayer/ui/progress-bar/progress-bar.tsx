import { useAppDispatch, useAppSelector } from '@hook/';
import {
  getStatePlaylist,
  setCurrentTime,
  setChangedCurrentTime,
} from '@redux/';

import * as Styled from './progress-bar.styled';


export const ProgressBar = () => {
  const dispatch = useAppDispatch();

  const { duration, currentTime } = useAppSelector(getStatePlaylist);

  return (
    <Styled.ProgressBar
      max={ duration }
      min={ 0 }
      type="range"
      value={ currentTime }
      onChange={ (e) => dispatch(setCurrentTime({ currentTime: +e.target.value })) }
      onClick={ () => dispatch(setChangedCurrentTime({ changedCurrentTime: currentTime })) }
    />
  );
};
