import { useEffect, useState } from 'react';
import Api from 'src/api';
import './index.scss';

function LeaderBoard(props) {
    const [photoList, setPhotoList] = useState([]);

    useEffect(() => {
        async function init() {
            try {
                const res = await Api.get('/rank/photo');
                console.log('res', res);
                if (res && res.data && res.data.photoList) {
                    setPhotoList(res.data.photoList)
                } else {
                    throw new Error(`fetch rank img error`);
                }
            } catch (err) {
                console.warn('err', err);
            }
        }
        init();
        return () => {
            setPhotoList((state, callback) => {
                return
            })
        }
    }, []);

    return (
        <div className="home-content rank-content">
            <div className="cta-container-images">
                {
                    photoList.map((item, index) => {
                        if (index <= 24 && index % 2) {
                            return (
                                <div className="cta-singular-cell" key={item.key}>
                                    <div className={`cta-internal-image-cont flip-${item.number}`}>
                                        <div className="cta-even-image" style={{ backgroundImage: `url(${item.default.default})` }}></div>
                                        <div className="cta-odd-image" style={{ backgroundImage: `url(${photoList[index + 1].default.default})` }}></div>
                                    </div>
                                </div>
                            )
                        } else {
                            return ""
                        }
                    })
                }
            </div>
        </div>
    );
}

export default LeaderBoard;
