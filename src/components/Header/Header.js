import logo from '../../images/mailchimp.png';
import { Menu, Search } from '@material-ui/icons';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <Menu className='menu'/>

            <nav>
                <ul>
                    <li>Products</li>
                    <li>Resources</li>
                    <li>Inspiration</li>
                    <li>Pricing</li>
                </ul>
            </nav>

            <div className='brand'>
                <img alt='logo' src={logo} />
            </div>
            
            <p>Log In</p>

            <div className='right'>
                <Search className='search'/>
                <button>Log In</button>
                <button>Sign Up Free</button>
            </div>
        </div>
    )
}
