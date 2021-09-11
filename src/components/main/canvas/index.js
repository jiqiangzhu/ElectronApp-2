import React, { useEffect } from 'react';
import './index.scss';

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
        var canvas = clockRef.current;
        if (!canvas.getContext) return;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 480, 480);
        ctx.save();
        ctx.translate(240, 240);
        let timer = new Date();
        let sec = timer.getSeconds();
        let min = timer.getMinutes();
        let hour = timer.getHours();
        // 绘制表框
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#333';
        ctx.arc(0, 0, 208, 0, 2 * Math.PI, false);
        ctx.stroke();

        // 绘制秒针
        ctx.save();
        ctx.rotate((Math.PI * 2 * sec) / 60);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -168);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'green';
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //绘制分针
        ctx.save();
        ctx.rotate((Math.PI * 2 * min) / 60);
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
        ctx.rotate((Math.PI * 2 * hour) / 12);
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
        //绘制表盘
        for (let i = 1; i < 61; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 60);
          ctx.beginPath();
          ctx.moveTo(0, 160);
          ctx.lineTo(0, 176);
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = i % 5 ? 1 : 4;
          ctx.strokeStyle = i % 5 ? '#999' : '#fff';
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }

        // 逆时针旋转1/2 Math.PI
        ctx.rotate((-Math.PI * 2) / 4);
        for (let i = 1; i < 13; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 12);
          ctx.beginPath();
          ctx.moveTo(0, 160);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(i, 192, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
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
    <div className="home-content movie-content">
      <div className="canvas-box">
        <canvas ref={clockRef} id="clock" width="480" height="480"></canvas>
      </div>
    </div>
  );
}

export default Clock;
