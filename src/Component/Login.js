import React from 'react';
import './Login1.css';


export default function Login(){
    return(

        <div> 
        <form className='form'>
             <div className='usuario'>
                 <input type='text ' name='username' placeholder='Nome do Usuário' />
             </div>

            <div className='senha'>
                <input type='password' name='senha' placeholder='Senha' />
            </div>

            <button className='botao'>Login</button>

                <p>Esqueceu sua senha?</p>
        </form>
        </div>
    );
}