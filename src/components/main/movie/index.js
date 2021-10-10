import { useEffect, useState } from 'react';
import Api from 'src/api';
import './index.less';
import './index.scss';

function Movie(props) {
  const [photoArray, setPhotoArray] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        let result = await Api.get('/movie/photo');
        console.log('result in movie', result);
        if (result && result.data && result.data.photoList) {
          setPhotoArray(result.data.photoList)
          console.log('list', result.data.photoList);
        } else {
          throw new Error(`Fetch movie data error`);
        }
      } catch (err) {
        console.warn('err in movie componets', err);
      }
    }
    init();
    return () => {
      // setPhotoArray([])
      setPhotoArray((state, callback) => {
        return
      })
    }
  }, []);
  const renderContent = () => {
    return photoArray.map((item, index) => {
      return (
        <div className="photo-item" style={{ backgroundImage: `url(${item.default.default})` }} key={item.key}>
        </div>
      )
    })

  }
  return (
    <div className="home-content movie-content">
      <div className="page">
        <div className="container">
          <div className="photo-container">
            <div className="photo-cont-item animation-1">
              {renderContent.call(this, photoArray)}
            </div>

            <div className="photo-cont-item animation-2">
              {renderContent.call(this, photoArray.reverse())}
            </div>

            <div className="photo-cont-item animation-3">
              {renderContent.call(this, photoArray.sort((item1, item2) => {
                return item1.number - item2.number
              }))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Movie;
