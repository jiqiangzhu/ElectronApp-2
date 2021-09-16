function demo() {
    console.log(window.innerWidth);
    console.log("浏览器对象宽度变化了")
}
window.onload = function () {
    this.addEventListener('resize', demo)
}
setTimeout(() => {
    // window.onunload = function () {
    window.removeEventListener('resize', demo)
    // }
}, 5000)