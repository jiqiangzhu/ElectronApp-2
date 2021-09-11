const { ipcRenderer } = window.require('electron');

const ipcRendererUtil = () => {
  ipcRenderer.on('max', async (event, args) => {
    const size = JSON.parse(args);
    document.documentElement.style.fontSize = size[1] - 250 + '%';
  });

  ipcRenderer.on('min', async (event, args) => {
    const size = JSON.parse(args);
    document.documentElement.style.fontSize = size[1] - 250 + '%';
  });

  ipcRenderer.on('will-resize', async (event, args) => {
    const size = JSON.parse(args);
    document.documentElement.style.fontSize = size[1] - 250 + '%';
  });
};

export default ipcRendererUtil;
