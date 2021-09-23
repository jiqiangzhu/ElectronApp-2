import {
  MusicPlay,
  MusicList,
  CurrentIndex,
  AudioFlag,
  NetValid,
  SelectKey,
  CurrentTime,
  ShowLoading,
  MusicName,
} from '../actions/play-actions';
import initialState from '../state';

function playReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case MusicPlay: {
      return {
        ...state,
        playFlag: payload.playFlag,
      };
    }
    case MusicList: {
      // localStorage.removeItem("currentIndex")
      return {
        ...state,
        musicList: payload.musicList,
      };
    }
    case MusicName: {
      // localStorage.removeItem("currentIndex")
      console.log('payload.nameList========', payload.nameList);
      return {
        ...state,
        musicNameList: payload.nameList,
      };
    }
    case CurrentIndex: {
      payload.currentAudio.src = state.musicList[payload.currentIndex];
      localStorage.currentIndex = payload.currentIndex;
      return {
        ...state,
        currentIndex: payload.currentIndex,
        currentAudio: payload.currentAudio,
      };
    }
    case AudioFlag: {
      return {
        ...state,
        currentAudio: payload.currentAudio,
      };
    }
    case NetValid: {
      return {
        ...state,
        netValid: payload.netValid,
      };
    }
    case SelectKey: {
      return {
        ...state,
        selectedKeys: {
          oldKey: state.selectedKeys.currentKey,
          currentKey: payload.key,
        },
      };
    }
    case CurrentTime: {
      localStorage.currentTime = payload.currentTime;
      return {
        ...state,
        currentTime: payload.currentTime,
      };
    }
    case ShowLoading: {
      return {
        ...state,
        showLoading: payload.showLoading,
      };
    }
    default:
      return state;
  }
}

export default playReducer;
