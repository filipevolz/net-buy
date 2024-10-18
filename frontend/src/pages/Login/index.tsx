import { Input } from '../../components/utils/Input';
import { Button } from '../../components/utils/Button';
import { ChangeEvent, useState } from 'react';
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
        </div>
    )
}