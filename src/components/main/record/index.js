import './index.scss';
import { Slider } from 'antd';

function Record(props) {
    return (
        <div className="record home-content">
            <Slider className="record-slider" defaultValue={30} disabled={false} />
        </div>
    )
}

export default Record;