import './index.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='favicon.svg' alt='MinhTC Tech' height={32.5} />
        <span>MinhTC Tech</span>
      </div>

      <div className='icons'>
        <div className='notification'>
          <img src='/notifications.svg' height={25} alt='Notification' />
          <span>3</span>
        </div>

        <div className='user'>
          <img src='minh.webp' alt='User' />
          <span>Minh</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
