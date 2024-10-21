import { Input } from '../../components/utils/Input';
import { Button } from '../../components/utils/Button';
import { ChangeEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.scss';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login bem-sucedido:', data);
            toast.success('Login bem-sucedido!'); // Mensagem de sucesso
            // Aqui você pode redirecionar o usuário ou armazenar o token
            // Exemplo: localStorage.setItem('token', data.token);
        } else {
            const errorText = await response.text(); // Obter texto do erro
            toast.error('Erro ao fazer login: ' + errorText); // Mensagem de erro
            console.error('Erro ao fazer login:', errorText);
        }
    };

    return (
        <div className='form-login'>
            <h3>Entre</h3>
            <form onSubmit={submitHandler}>
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
                />
            </form>
            <span id='forgot-password'><a href="">Esqueci minha senha</a></span>
            <ToastContainer /> {/* Contêiner para os Toasts */}
        </div>
    );
}
