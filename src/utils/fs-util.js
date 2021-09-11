/**
 * local file utils
 */

const fs = window.require('fs-extra');
const fsUtils = {
  /**
   * read all files in path
   * @param {*} path dir path
   * @param {*} resolve func
   * @returns
   */
  readMusicDir: (path, resolve) => {
    if (!path) {
      return;
    }
    fs.readdir(path, resolve);
  },
  /**
   * read content of files
   * @param {*} filename
   * @param {*} resolve
   */
  readFile: async (filename, resolve) => {
    if (!filename) {
      return;
    }
    await fs.readFile(filename, 'utf8', resolve);
  },
  fileStat: async (filename, resolve) => {
    if (!filename) {
      return 'null';
    }
    return fs.stat(filename);
  },
  /**
   *
   * @param {*} data
   * @param {*} callback
   * @returns
   */
  writeFile: async (path, data, callback) => {
    if (!data) {
      return 'null';
    }
    await fs.writeFile(path, data, { encoding: 'utf8' }, callback);
  },
};

export default fsUtils;
