import React, { useEffect } from 'react';
import './index.scss';
import bgPath from '@/assets/img/animation/15.jpg';

function Clock() {
  const clockRef = React.createRef();
  const drawCanvas = () => {
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 6000 / 60);
        }
      );
    })();

    function draw() {
      try {
        const canvas = clockRef.current;
        if (!canvas.getContext) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        let timer = new Date();
        let sec = timer.getSeconds();
        let min = timer.getMinutes();
        let hour = timer.getHours();
        // 绘制表框
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#42485ec1';
        ctx.arc(0, 0, 208, 0, 2 * Math.PI, false);
        ctx.stroke();

        //绘制表盘
        for (let i = 1; i <= 60; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 60);
          ctx.beginPath();
          ctx.moveTo(0, 160);
          ctx.lineTo(0, 176);
          ctx.lineWidth = i % 5 ? 1 : 4;
          ctx.strokeStyle = i % 5 ? '#999' : '#aaa';
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
        // 绘制秒针
        ctx.save();
        ctx.rotate((Math.PI * 2 * sec) / 60);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -175);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'green';
        // ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //绘制分针
        ctx.save();
        let minuteDeg = ((Math.PI * 2 * min) / 60) + ((Math.PI * 2 * sec) / 3600)

        ctx.rotate(minuteDeg);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -160);
        ctx.strokeStyle = 'orange';
        ctx.lineWidth = 3;
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        //绘制时针
        ctx.save();
        let hourDeg = ((Math.PI * 2 * hour) / 12) + ((Math.PI * 2 * min) / 720)
        // + ((Math.PI * 2 * sec) / 3600);
        ctx.rotate(hourDeg);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -112);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //中心的原点
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();


        let deg = (Math.PI * 2) / 12;
        let r = 190;
        for (let i = 1; i <= 12; i++) {
          let x = r * Math.sin(deg * i);
          let y = -(r) * Math.cos(deg * i);
          ctx.font = "bold 18px Arail";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#efefef";
          ctx.fillText(i, x, y);
        }

        // 辅助线
        // ctx.beginPath();
        // ctx.lineWidth = 2;
        // ctx.strokeStyle = '#555';
        // ctx.arc(0, 0, 190, 0, 2 * Math.PI, false);
        // ctx.stroke();
        // 逆时针旋转1/2 Math.PI
        // ctx.rotate((-Math.PI * 2) / 4);
        // for (let i = 1; i < 13; i++) {
        //   ctx.save();
        //   ctx.rotate((Math.PI * 2 * i) / 12);
        //   ctx.beginPath();
        //   ctx.moveTo(0, 160);
        //   ctx.fillStyle = '#fff';
        //   ctx.font = 'bold 14px Arial';
        //   ctx.textAlign = 'center';
        //   ctx.textBaseline = 'middle';
        //   ctx.fillText(i, 192, 0);
        //   ctx.closePath();
        //   ctx.stroke();
        //   ctx.restore();
        // }
        ctx.restore();
        window.requestAnimFrame(draw);
      } catch (e) {
        console.warn('clock', e);
      }
    }

    window.requestAnimFrame(draw);
  };

  useEffect(() => {
    function init() {
      drawCanvas();
    }
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="home-content clock">
      <div className="canvas-box" style={{backgroundImage: `url(${bgPath})`}}>
        <canvas ref={clockRef} id="clock" width="480" height="480"></canvas>
      </div>
    </div>
  );
}

export default Clock;
