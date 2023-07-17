import './index.scss'
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { singleUser } from './data'

const UserPage = () => {
  return (
    <div className='user'>
      <div className='single'>
        <div className='view'>
          <div className='info'>
            <div className='topInfo'>
              {singleUser.img && <img src={singleUser.img} alt='User Img' />}
              <h1>{singleUser.title}</h1>
            </div>

            <div className='details'>
              {Object.entries(singleUser.info).map((item) => (
                <div className='item' key={item[0]}>
                  <span className='itemTitle'>{item[0]}:</span>
                  <span className='itemValue'>{item[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <hr />

          {singleUser.chart && (
            <div className='chart'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                  width={500}
                  height={300}
                  data={singleUser.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {singleUser.chart.dataKeys.map((dataKey) => (
                    <Line
                      type='monotone'
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className='activities'>
          <h2>Latest Activities</h2>
          {singleUser.activities && (
            <ul>
              {singleUser.activities.map((activity) => (
                <li key={activity.text}>
                  <div>
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              ))}
              <li />
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserPage
