import React from 'react';
import { Link } from 'react-router-dom';
import HikingIcon from '@mui/icons-material/HikingSharp';

export default ({ currentUser, logout }) => {
  const [open, setOpen] = React.useState(false);

  function handleClick(e) {
    console.log(e.target.closest('#dropdown-container'))
    if (!e.target.closest('#dropdown-container') && open) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('mouseenter', handleClick);
    return () => {
      document.removeEventListener('mouseleave', handleClick);
    }
  })

  const display = currentUser ? (
    <div>
      
      <div id='dropdown-container'>
        <HikingIcon onClick={() => setOpen(open => !open)} className='hiking-icon' style={{ fontSize: '40px', color: '#428A13' }}/>
      {open && (<div className='dropdown-box'>
      <ul className='nav-dropdown'>
        <li>
          <button className='dropdown-item' onClick={logout}>Logout</button>
        </li>
        <li >
          <button className='dropdown-item'>Profile</button>
        </li>
      </ul>
      </div>)}
    </div>
    </div>
  ) : (
    <div>
      <Link className="signup-btn" to="/signup">Sign Up</Link>
      <Link className="login-btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};

// createLi() {
//   const items = Object.keys(this.ingredients)
//   items.forEach(item => {
//     let li = document.createElement("li")
//     li.innerHTML = item;
//     li.classList = 'item'
//     this.parent.appendChild(li)
//   });
// }

// handleLeave() {
//   const items = document.querySelectorAll(".item");
//   items.forEach(child => child.classList.remove('open'));
// };

// handleEnter() {
//   const items = document.querySelectorAll(".item");
//   items.forEach(child => child.classList.add('open'));
// };