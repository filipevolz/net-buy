import { Login } from "../../pages/Login";
import { Signup } from "../../pages/Signup";
import { useLocation } from "react-router-dom";
import './default-form-layout.scss';
import iconLogo from '../../assets/icon-logo.png';
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
                { isLogin && (
                    <Login />
                )}

                { isSignup && (
                    <Signup />
                ) }
            </section>
        </main>
    )
}