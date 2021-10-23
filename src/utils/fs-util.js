/**
 * local file utils
 */
const fs = window.require("fs");
const { promisify } = window.require("util");
const readDir = promisify(fs.readdir);
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
  readMusicDir1: (path) => {
    return new Promise((resolve, reject) => {
      try {
        if (!path) {
          reject("path is undefined")
        }
        readDir(path).then(value => {
          resolve(value)
        }).catch(err => {
          reject(err)
        })
      } catch (error) {
        console.warn('error', error);
        reject(error)
      }
    })
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
