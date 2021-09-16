import React, { useEffect, useState } from 'react';
import './index.scss';

function LeaderBoard(props) {
    // const [photoList, setPhotoList] = useState([]);
    const myRef = React.createRef();
    const rankRef = React.createRef();
    const [width] = useState(1600)
    const [height] = useState(1000)
    useEffect(() => {
        // async function init() {
        //     try {
        //         const res = await Api.get('/rank/photo');
        //         console.log('res', res);
        //         if (res && res.data && res.data.photoList) {
        //             setPhotoList(res.data.photoList)
        //         } else {
        //             throw new Error(`fetch rank img error`);
        //         }
        //     } catch (err) {
        //         console.warn('err', err);
        //     }
        // }
        // init();
        // return () => {
        //     setPhotoList((state, callback) => {
        //         return
        //     })
        // }
        // myRef.current.addEventListener('load', () => {
        //     myRef.current.contentWindow.postMessage({ nice: 'ok' }, 'https://www.youtube.com/')
        // })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div className="home-content rank-content" ref={rankRef}>
            <div className="cta-container-images">
                {/* <iframe src="https://www.runoob.com/tags/tag-iframe.html" title="demo" width="900" height="600"></iframe> */}
                <iframe id="frame" ref={myRef} src="https://blog.csdn.net/huangpb123/article/details/88373278" className="demo" title="demo" width={width} height={height}></iframe>
                {/* {http://localhost:3000/
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
                } */}
            </div>
        </div>
    );
}

export default LeaderBoard;
