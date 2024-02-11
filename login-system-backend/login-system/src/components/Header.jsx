import { Link } from 'react-router-dom'
import HeaderStyle from './All.module.css'

const Header = () => {
    return (
        <>
            <nav className='header  h-16 py-2 px-3 flex items-center justify-between'>
                <div>
                    <ul className='flex items-center justify-center'>
                    <li className={HeaderStyle.navli}><Link to="/">Home</Link></li>
                        <li className={HeaderStyle.navli}><Link to="/register">Register</Link></li>
                        <li className={HeaderStyle.navli}><Link to="/login">Login</Link></li>
                      
                    </ul>
                    <div className='dashboard-link'><Link to="/dashboard">Dashboard</Link></div>
                </div>
            </nav>
        </>
    )
}

export default Header;