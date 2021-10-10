import './index.scss';
import earthPath from '@/assets/img/content.png';

function Earth(props) {
    return (
        <div className="earth cannotselect">
            <div class="earth-main"
                // style={{ background: `url(${earthPath}) repeat-x 0 0` }}
            ></div>
        </div>
    )
}

export default Earth;
