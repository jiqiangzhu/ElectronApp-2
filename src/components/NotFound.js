import { Result, Button } from 'antd'
import './index.less'

function NotFound(props) {
  return (
    <Result
      className="home-content"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            props.history.push('/home')
          }}
        >
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
