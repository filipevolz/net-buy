import { Input } from '../../components/utils/Input';
import { Button } from '../../components/utils/Button';
import { ChangeEvent, useState } from 'react';
import iconFacebook from '../../assets/facebook-icon.svg';
import iconGoogle from '../../assets/google-icon.svg';
import './login.scss';

export function Login(){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('') 

    return (
        <div className='form-container'>
            <h3>Entre</h3>
            <form>
                <Input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Senha'
                    value={password}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
                <Button
                    type='submit'
                    children='Entre'
                    onClick={() => console.log("clicou")}
                />
            </form>
            <span id='forgot-password'><a href="">Esqueci minha senha</a></span>
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
            <div className='new-client'>
                <p>Novo na NetBuy? <span><a href="">Cadastrar</a></span></p>
            </div>
        </div>
    )
}