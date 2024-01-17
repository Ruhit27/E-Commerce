
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""  />
           <div className='anchor'>
            <a href="Order">Shop</a>
            <a href="Order Review">Order</a>
            <a href="Manage Inventory">Manage Inventory</a>
            <a href="Login">Login</a>
          
           </div>
        </div>
        
    );
};

export default Header;