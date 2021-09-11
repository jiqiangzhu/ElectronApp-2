const MusicPlay = 'Play';
const MusicPause = 'Pause';
const MusicList = 'MusicList';
const CurrentIndex = 'CurrentIndex';
const AudioFlag = 'audio';
const NetValid = 'netValid';
const SelectKey = 'selectKey';
const CurrentTime = 'currentTime';
const ShowLoading = 'showLoading';

// play pause music
function playMusic(playFlag) {
  return {
    type: MusicPlay,
    payload: { playFlag },
  };
}
// play list
function musicList(musicList) {
  return {
    type: MusicList,
    payload: { musicList },
  };
}
// current music index
function currentIndex(currentIndex, currentAudio) {
  return {
    type: CurrentIndex,
    payload: { currentIndex, currentAudio },
  };
}
// audio ref
function audioRef(currentAudio) {
  return {
    type: AudioFlag,
    payload: { currentAudio },
  };
}
// check network
function checkNet(netValid) {
  return {
    type: NetValid,
    payload: { netValid },
  };
}

function SelectKeyRedux(key) {
  return {
    type: SelectKey,
    payload: { key },
  };
}
function setCurrentTime(currentTime) {
  return {
    type: CurrentTime,
    payload: { currentTime },
  };
}
function setShowLoaing(showLoading) {
  return {
    type: ShowLoading,
    payload: { showLoading },
  };
}

export {
  playMusic as playMusicRedux,
  musicList as musicListRedux,
  currentIndex as currentIndexRedux,
  audioRef as audioRefRedux,
  checkNet as checkNetRedux,
  SelectKeyRedux,
  setCurrentTime as setCurrentTimeRedux,
  setShowLoaing as setShowLoaingRedux,
  AudioFlag,
  MusicPlay,
  MusicPause,
  MusicList,
  CurrentIndex,
  NetValid,
  SelectKey,
  CurrentTime,
  ShowLoading,
};
