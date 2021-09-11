import { Row, Col, Image } from 'antd'
import { useEffect, useState } from 'react'
import Api from 'src/api'
import './index.less'

function Recommend(props) {
  const [imgPathArr, setImgPathArr] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await Api.get('/home/recommend')
        console.log('result', result)
        if (result && result.data && result.data.data) {
          const data = result.data.data
          setImgPathArr(data)
        } else {
          throw new Error(result.data)
        }
      } catch (e) {
        console.warn('e>>>>>>>>>>', e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="home-content recommend">
      <div className="scroller-bar">
        <Row>
          {imgPathArr.map((item, index) => {
            return (
              <Col key={index} xs={{ span: 4, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                <Image src={item} />
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Recommend
