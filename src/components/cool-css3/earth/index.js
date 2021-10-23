import './index.scss';
import earthPath from '@/assets/img/content.png';

function Earth(props) {
    return (
        <div className="earth cannotselect">
            <div className="earth-main"
                style={{
                    background: `url(${earthPath}) repeat-x 0 0`,
                    backgroundSize: 'auto 100%'
                }}
            ></div>
        </div>
    )
}

export default Earth;
