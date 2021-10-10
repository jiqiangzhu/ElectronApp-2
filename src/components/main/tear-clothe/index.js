import React from 'react';
import './index.scss';
import { Button, Slider } from 'antd';
import Api from 'src/api';
import store from 'src/redux';
import { setShowLoaingRedux } from 'src/redux/actions/play-actions';
import iconPath from 'src/assets/img/ico/tear.ico';
import iconPath1 from 'src/assets/img/ico/tear1.ico';

class TearClothe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      down: false,
      img1: '',
      img2: '',
      radius: 20,
      imgArr: [],
      sliderContent: '',
    };
    this.canvasRef = React.createRef();
  }

  getRandomNumber(max = 10) {
    let num = Math.random() * max | 0;
    return !(num % 2) ? num : num + 1;
  }

  clear = (e) => {
    try {
      if (this.state.down) {
        this.canvasRef.current
          .getContext('2d')
          .drawImage(
            this.state.img2,
            e.nativeEvent.offsetX - this.state.radius / 2,
            e.nativeEvent.offsetY - this.state.radius / 2,
            this.state.radius,
            this.state.radius,
            e.nativeEvent.offsetX - this.state.radius / 2,
            e.nativeEvent.offsetY - this.state.radius / 2,
            this.state.radius,
            this.state.radius
          );
      }
    } catch {
      console.warn('warn or error in function clear');
    }
  };
  change = (index = 0) => {
    index = !(index > 13 || index < 0) ? index : 0;
    console.log('index', index);
    try {
      store.dispatch(setShowLoaingRedux(true));
      setTimeout(() => {
        store.dispatch(setShowLoaingRedux(false));
      }, 200);
      const img1 = new Image();
      const img2 = new Image();
      img1.src = this.state.imgArr[index].default;
      img2.src = this.state.imgArr[index + 1].default;
      img1.onload = () => {
        this.setState({
          img1: img1
        });
        this.canvasRef.current
          .getContext('2d')
          .drawImage(this.state.img1, 0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
      };
      img2.onload = () => {
        this.setState({
          img2: img2,
        });
      };
    } catch (e) {
      console.warn(`warn or error in function change:\n${e}`);
    }
  };
  async componentDidMount() {
    try {
      const result = await Api.get('/tear/clothe');
      console.log('result.data.data====', result.data.data);
      if (!result?.data?.data) {
        throw new Error("get photo error");
      }
      const data = result.data.data;
      this.setState({
        imgArr: data,
      });
      let content1 = data.map((item, index) => {
        let res = '';
        if (index % 2 === 0) {
          res = (
            <div
              key={index}
              className="photo-item"
              onClick={() => {
                this.change(index);
              }}
            >
              <img style={{ width: '1rem' }} src={item.default} alt="nothing" />
            </div>
          );
        }
        return res;
      });
      // let content2 = data.map((item, index) => {
      //   let res = '';
      //   if (index % 2 === 0) {
      //     res = (
      //       <div key={index + 100} className="photo-item" onClick={() => {
      //         this.change(index);
      //       }}
      //       >
      //         <img style={{ width: '1rem' }} src={item.default} alt="nothing" />
      //       </div>
      //     );
      //   }
      //   return res;
      // });

      this.setState({
        sliderContent: content1,
      });

      this.change(this.getRandomNumber(13));
    } catch (err) {
      console.warn(`warn or error in function componentDidMount:\n${err}`);
    }
  }

  render() {
    return (
      <>
        <div className="home-content tear-clothe">
          <div className="menu">
            <div className="slider-img">
              <div className="photo-container cannotselect">
                <div className="photo-cont-item animation-1">{this.state.sliderContent}</div>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  store.dispatch(setShowLoaingRedux(true));
                  setTimeout(() => {
                    store.dispatch(setShowLoaingRedux(false));
                  }, 500);
                  this.canvasRef.current
                    .getContext('2d')
                    .drawImage(this.state.img1, 0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
                }}
              >
                Reload
              </Button>
              <div
                style={{
                  display: 'inline-block',
                  height: 200,
                  marginLeft: 70
                }}
              >
                <Slider vertical defaultValue={this.state.radius} min={10} max={30}
                  marks={{
                    10: '10 Size',
                    30: 30,
                  }}
                  onChange={(value) => {
                    this.setState({
                      radius: value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <canvas id="tear" className="tear" style={{
            cursor: `url(${this.state.radius > 20 ? iconPath : iconPath1}), auto`
          }}
            width="320" height="480" ref={this.canvasRef} onMouseDown={() =>
              this.setState({
                down: true,
              })
            }
            onMouseMove={(e) => this.clear(e)}
            onMouseUp={() =>
              this.setState({
                down: false,
              })
            }
          >您的浏览器不支持Canvas</canvas>
        </div>
      </>
    );
  }
}

export default TearClothe;
