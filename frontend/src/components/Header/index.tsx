import './header.scss';
import logo from '../../assets/logo.png';

export function Header(){
    return(
        <header>
            <div className='logo'>
                <img src={logo} />
            </div>
        </header>
    )
}