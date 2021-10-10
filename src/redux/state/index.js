const initialState = {
  playFlag: 'pause',
  musicList: [],
  musicNameList: [],
  currentIndex: localStorage.currentIndex ? parseInt(localStorage.currentIndex) : 0,
  currentAudio: {},
  currentSrc: '',
  netValid: false,
  selectedKeys: {
    currentKey: '1',
    oldKey: '',
  },
  currentTime: localStorage.currentTime ? localStorage.currentTime * 1 : 0,
  showLoading: false,
};

export default initialState;
