import { useAppDispatch, useAppSelector } from '@hook/';
import {
  getStatePlaylist,
  setCurrentTime,
  setChangedCurrentTime,
  getStateMenu,
} from '@redux/';

import * as Styled from './progress-bar.styled';


export const ProgressBar = () => {
  const dispatch = useAppDispatch();

  const { duration, currentTime } = useAppSelector(getStatePlaylist);
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.ProgressBar
      $bgColor={ isDarkTheme ? '#2e2e2e' : '#D9D9D9' }
      max={ duration }
      min={ 0 }
      type="range"
      value={ currentTime }
      onChange={ (e) => dispatch(setCurrentTime({ currentTime: +e.target.value })) }
      onClick={ () => dispatch(setChangedCurrentTime({ changedCurrentTime: currentTime })) }
    />
  );
};
