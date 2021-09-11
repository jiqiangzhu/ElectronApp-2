import { useEffect } from 'react';
import './index.less';
import './index.scss';

function Movie(props) {
  useEffect(() => {
    // store.dispatch(setShowLoaingRedux(false))
    console.log('did mount');
  }, []);
  return (
    <div className="home-content movie-content">
      <div className="page">
        <div className="container">
          <div className="photo-container">
            <div className="photo-cont-item animation-1">
              <div className="photo-item photo-1"></div>
              <div className="photo-item photo-2"></div>
              <div className="photo-item photo-3"></div>
              <div className="photo-item photo-4"></div>
              <div className="photo-item photo-5"></div>
              <div className="photo-item photo-6"></div>

              <div className="photo-item photo-1"></div>
              <div className="photo-item photo-2"></div>
              <div className="photo-item photo-3"></div>
              <div className="photo-item photo-4"></div>
              <div className="photo-item photo-5"></div>
              <div className="photo-item photo-6"></div>
            </div>

            <div className="photo-cont-item animation-2">
              <div className="photo-item photo-7"></div>
              <div className="photo-item photo-8"></div>
              <div className="photo-item photo-9"></div>
              <div className="photo-item photo-10"></div>
              <div className="photo-item photo-11"></div>
              <div className="photo-item photo-12"></div>

              <div className="photo-item photo-7"></div>
              <div className="photo-item photo-8"></div>
              <div className="photo-item photo-9"></div>
              <div className="photo-item photo-10"></div>
              <div className="photo-item photo-11"></div>
              <div className="photo-item photo-12"></div>
            </div>

            <div className="photo-cont-item animation-3">
              <div className="photo-item photo-13"></div>
              <div className="photo-item photo-14"></div>
              <div className="photo-item photo-15"></div>
              <div className="photo-item photo-16"></div>
              <div className="photo-item photo-17"></div>
              <div className="photo-item photo-18"></div>

              <div className="photo-item photo-13"></div>
              <div className="photo-item photo-14"></div>
              <div className="photo-item photo-15"></div>
              <div className="photo-item photo-16"></div>
              <div className="photo-item photo-17"></div>
              <div className="photo-item photo-18"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
