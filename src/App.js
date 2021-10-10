import { Skeleton } from 'antd';
import './App.less';
import Api from './api';
import React, { useEffect, useState } from 'react';
import routes from './router';
import LoadingCom from './components/main/loading';
import { connect } from 'react-redux';
import ipcRendererUtil from './utils/ipc-render-util';
import '@/utils/string-util';
import Earth from './components/cool-css3/earth';
/**
 * main Components
 * @param {*} props
 * @returns
 */
function AppCom(props) {
  let [loadingFlag, setLoadingFlag] = useState(true);
  const [RenderCom, setRenderCom] = useState('');
  const { showLoading } = props;
  useEffect(() => {
    setTimeout(async () => {
      setLoadingFlag(false);
    }, 500);

    async function initRequset() {
      let result = await Api.get('/home/musiclist');
      console.log('get playlist---------------', result);
    }
    initRequset();
    ipcRendererUtil();
  }, []);
  useEffect(() => {
    setRenderCom(showLoading ? <LoadingCom show={true} /> : '');
  }, [showLoading]);

  return (
    <Skeleton active loading={loadingFlag} rows={100}>
      {/* <div className="bg-gif"></div> */}
      <Earth />
      <div className="main-content">{routes}</div>
      {RenderCom}
    </Skeleton>
  );
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.playReducer.showLoading,
  };
};

const App = connect(mapStateToProps)(AppCom);

export default App;
