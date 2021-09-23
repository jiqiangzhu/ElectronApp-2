/**
 * app window-util
 */

// electron render process
const { ipcRenderer } = window.require('electron');
// check network module
const internetAvailable = window.require('internet-available');

const windowUtils = {
  /**
   * set window max
   * @returns
   */
  setWindowMax: async function () {
    return ipcRenderer.send('setMax');
  },

  /**
   * set window restore
   * @returns
   */
  setWindowRestore: async function () {
    return ipcRenderer.send('setRestore');
  },

  /**
   * close window
   * @returns
   */
  setWindowClosed: async function () {
    return ipcRenderer.send('setClose');
  },
  /**
   * set opacity of window
   * @param {*} value
   * @returns
   */
  setWindowOpacity: async function (value) {
    return ipcRenderer.send('setOpacity', value);
  },
  /**
   * set window min
   * @returns
   */
  setWindowMin: async function () {
    return ipcRenderer.send('setMin');
  },

  /**
   * import local files from path
   * @param {*} path
   * @param {*} resolve
   */
  openFolder: async function (path, resolve) {
    try {
      await ipcRenderer.send('openFolder', path);
      ipcRenderer.on('asynchronous-reply', resolve);
    } catch (err) {
      console.warn(err);
    }
  },

  /**
   * control music play state by shortcups
   * @param {*} path
   * @param {*} resolve
   */
  controlMusicState: async function (resolve) {
    ipcRenderer.on('controlMusicState', resolve);
  },

  /**
   * check network
   * @returns net connect ? true : false
   */
  checkInternetAvailable: async () => {
    try {
      await internetAvailable({
        domainName: 'baidu.com',
        port: 53,
        host: '114.114.114.114',
        rate: 1000,
      });
      console.log('net avaliable--------');
      return true;
    } catch (err) {
      console.warn('net cannot connect------', err);
      return false;
    }
  },
};

export default windowUtils;
