/**
 * 计算并返回字符串字节长度
 * @returns
 */
String.prototype.byteLength = function () {
  /*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
  let count = 0;
  for (var i = 0; i < this.length; i++) {
    if (this.charCodeAt(i) > 255) {
      //charCodeAt返回参数Unicode编码
      count += 2; //中文为2Byte
    } else {
      count++; //其他为1Byte
    }
  }
  return count;
};

/**
 *
 * @param {*} length
 * @returns 由数字和字母组成指定长度随机数
 */
function getRandomCode(length) {
  if (length > 0) {
    let data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let str = '';
    for (let i = 0; i < length; i++) {
      let r = parseInt(Math.random() * 61);
      str += data[r];
    }
    return str;
  } else {
    return '';
  }
}

function getRandomNumber(length) {
  if (length > 0) {
    let data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let number = '';
    for (let i = 0; i < length; i++) {
      let r = parseInt(Math.random() * 9);
      number += data[r];
    }
    return number | 0;
  } else {
    return 0;
  }
}
export { getRandomCode, getRandomNumber };
