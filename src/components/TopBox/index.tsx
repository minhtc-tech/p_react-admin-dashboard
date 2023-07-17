import './index.scss'

const topDealUsers = [
  {
    img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    username: 'Elva McDonald',
    email: 'elva@gmail.com',
    amount: '3.668',
  },
  {
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Linnie Nelson',
    email: 'linnie@gmail.com',
    amount: '3.256',
  },
  {
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Brent Reeves',
    email: 'brent@gmail.com',
    amount: '2.998',
  },
  {
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Adeline Watson',
    email: 'adeline@gmail.com',
    amount: '2.512',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Juan Harrington',
    email: 'juan@gmail.com',
    amount: '2.134',
  },
  {
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Augusta McGee',
    email: 'augusta@gmail.com',
    amount: '1.932',
  },
  {
    img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: 'Angel Thomas',
    email: 'angel@gmail.com',
    amount: '1.560',
  },
]

const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>

      <div className='list'>
        {topDealUsers.map((user) => (
          <div className='listItem' key={user.email}>
            <div className='user'>
              <img src={user.img} alt='User Img' />

              <div className='userTexts'>
                <span className='username'>{user.username}</span>
                <span className='email'>{user.email}</span>
              </div>
            </div>

            <span className='amount'>${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
