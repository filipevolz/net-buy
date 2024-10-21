import { Login } from "../../pages/Login";
import { Signup } from "../../pages/Signup";
import { useLocation } from "react-router-dom";
import './default-form-layout.scss';
import iconLogo from '../../assets/icon-logo.png';
import iconFacebook from '../../assets/facebook-icon.svg';
import iconGoogle from '../../assets/google-icon.svg';
import { Header } from "../Header";

export function DefaultFormLayout(){
    const location = useLocation();

    const isLogin = location.pathname === "/login";
    const isSignup = location.pathname === "/signup";

    return (
        <main>
            <Header />
            <section className="form-section">
                <div className="presentation">
                    <img src={iconLogo} alt="Logo NetBuy Company" />
                    <p>Sua plataforma de<br/> compras online</p>
                </div>
                <div className="form-container">
                    { isLogin && (
                        <Login />
                    )}

                    { isSignup && (
                        <Signup />
                    )}

                    <div className='divider'>
                        <div></div>
                        <span>OU</span>
                        <div></div>
                    </div>
                    <div className='more-options-login'>
                        <div className='login-facebook'>
                            <a href="">
                                <img src={iconFacebook} alt="Icon from Facebook" />
                                <p>Facebook</p>
                            </a>
                        </div>
                        <div className='login-google'>
                            <a href="">
                                <img src={iconGoogle} alt="Icon from Google" />
                                <p>Google</p>
                            </a>
                        </div>
                    </div>
                    { isLogin && (
                        <div className='new-client'>
                            <p>Novo na NetBuy? <span><a href="">Cadastrar</a></span></p>
                        </div>
                    ) }
                </div>
            </section>
        </main>
    )
}