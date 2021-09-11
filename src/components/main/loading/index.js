import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setShowLoaingRedux } from 'src/redux/actions/play-actions';
import './index.less';

function Loading(props) {
  const { showLoading, setShowLoading } = props;
  const [showTips, setShowTips] = useState(props.show);
  useEffect(() => {
    const timer = setTimeout(() => {
      function init() {
        setShowTips(false);
      }
      init();
    }, 5000); //user could cancel after five seconds
    return () => {
      clearTimeout(timer);
    };
  }, [showTips]);
  return (
    <div className="loading cannotselect" style={{ display: showLoading ? 'flex' : 'none' }}>
      <div className="box1" style={{ display: localStorage.loadingMode === '1' ? 'block' : 'none' }}>
        <div className="solar">
          <i className="mercury"></i>
          <i className="venus"></i>
          <i className="earth"></i>
          <i className="mars"></i>
          <i className="belt"></i>
          <i className="jupiter"></i>
          <i className="saturn"></i>
          <i className="uranus"></i>
          <i className="neptune"></i>
        </div>
        <div className="tips">
          <div className={`words ${showTips ? 'continue' : 'cancel'}`} onClick={() => setShowLoading(false)}>
            {showTips ? 'loading' : 'cancel'}
          </div>
        </div>
      </div>
      <div className="box2" style={{ display: localStorage.loadingMode === '2' ? 'block' : 'none' }}>
        <div className="loader2">
          <i></i>
        </div>
        <div className="tips">
          <div className={`words ${showTips ? 'continue' : 'cancel'}`} onClick={() => setShowLoading(false)}>
            {showTips ? 'loading' : 'cancel'}m
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.playReducer.showLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShowLoading: (showLoading) => {
      dispatch(setShowLoaingRedux(showLoading));
    },
  };
};
const LoadingCom = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default LoadingCom;
