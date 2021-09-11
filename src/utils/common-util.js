const commonUtils = {
  /**
   * Seconds to minutes: seconds
   * @param {seconds} sec
   * @returns
   */
  secondsFormat: function (sec, len = 2) {
    let hour = Math.floor(sec / 3600);
    let minute = Math.floor((sec - hour * 3600) / 60);
    let second = sec - hour * 3600 - minute * 60;
    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
    return len === 3 ? hour + ':' + minute + ':' + second : minute + ':' + second;
  },
  /**
   * format date( time )util
   * @param {*} date year-month-day hour:minute:seconds
   * @returns xxxx年xx月xx日 xx时:xx分:xx秒
   */
  dateTimeFormat: function (str) {
    let [curDate, curTime] = str.split(' ');
    console.log(curDate, curTime);
    let [year, month, day] = [...curDate.split('-')];
    return `${year}年${month}月${day}日 ${curTime}`;
  },
  /**
   * Generate any number from 1 to max
   * [) close left open right
   * @param {max integer} max
   * @returns
   */
  randomInteger: function (currentIndex, max) {
    let result = parseInt(Math.random() * max, 10);
    // if result equals currentIndex, recursion
    if (result === currentIndex) {
      return this.randomInteger(currentIndex, max);
    }
    return result;
  },
  /**
   * delay 2 seconds
   * @param {*} resolve
   */
  delay2s: function (resolve) {
    setTimeout(
      {
        resolve,
      },
      2000
    );
  },
};

export default commonUtils;
