import { useEffect } from 'react';
import './index.less';
import routes2 from 'src/router/second-router';

function Home(props) {
  useEffect(() => {
    console.log('router', props.history);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="home">{routes2}</div>;
}

export default Home;
