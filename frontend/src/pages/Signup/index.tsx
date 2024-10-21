import { Input } from '../../components/utils/Input';
import { Button } from '../../components/utils/Button';
import { ChangeEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toast
import './signup.scss';

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Cadastro bem-sucedido:', data);
            toast.success('Cadastro bem-sucedido!'); // Mensagem de sucesso
            // Aqui você pode redirecionar o usuário ou armazenar o token
        } else {
            const errorText = await response.text(); // Obter texto do erro
            toast.error('Erro ao cadastrar: ' + errorText); // Mensagem de erro
            console.error('Erro ao cadastrar:', errorText);
        }
    };

    return (
        <div className='form-signup'>
            <h3>Cadastre-se</h3>
            <form onSubmit={submitHandler}>
                <Input
                    type='text'
                    placeholder='Nome'
                    value={name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                />
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
                    children='Cadastre-se'
                />
            </form>
            <ToastContainer /> {/* Contêiner para os Toasts */}
        </div>
    );
}
