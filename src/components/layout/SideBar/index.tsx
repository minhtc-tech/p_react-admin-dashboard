import { Link } from 'react-router-dom'
import './index.scss'

const menu = [
  {
    title: 'main',
    listItems: [
      {
        title: 'Homepage',
        url: '/',
        icon: 'home.svg',
        height: 19,
      },
    ],
  },
  {
    title: 'Maintenance',
    listItems: [
      {
        title: 'Author',
        url: 'https://minhtc.tech',
        icon: 'profile.svg',
        height: 17,
      },
    ],
  },
]

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='item' key={item.title}>
          <span className='title'>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className='listItem' key={listItem.title}>
              <img
                src={listItem.icon}
                alt='Menu Icon'
                height={listItem.height}
              />
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
