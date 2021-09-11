const electron = window.require('electron');
const remote = electron.remote;
const Menu1 = remote.Menu;
const MenuItem1 = remote.MenuItem;

function onLoad(area) {
  const menu = new Menu1();
  // const win = remote.getCurrentWindow();

  var menuChildItem1 = new MenuItem1({ label: '打开', click: () => { } }); //创建一个子菜单项
  var menuChildItem2 = new MenuItem1({ label: '保存', click: () => { } }); //创建一个子菜单项
  var menuItem1 = new MenuItem1({ label: '文件', submenu: [menuChildItem1, menuChildItem2] }); //创建一个顶级菜单项,将子菜单项添加到submenu中

  var menuChildItem3 = new MenuItem1({ label: '复制', click: () => { } }); //创建一个子菜单项
  var menuChildItem4 = new MenuItem1({ label: '粘贴', click: () => { } }); //创建一个子菜单项
  var menuItem2 = new MenuItem1({ label: '编辑', submenu: [menuChildItem3, menuChildItem4] });

  menu.append(menuItem1); //将菜单项添加到menu中
  menu.append(menuItem2); //将菜单项添加到menu中

  //给id=area的div区域添加右键菜单
  area.current.addEventListener('contextmenu', function (e) {
    e.preventDefault(); //阻止默认行为
    let x = e.x; //鼠标右键点击的横坐标
    let y = e.y; //鼠标右键点击的纵坐标
    menu.popup({ x: x, y: y });
    return false;
  });
}
export default onLoad;
