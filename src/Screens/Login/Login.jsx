import React from 'react'
import ButtonLogin from '../../Components/ButtonLogin'
import PasswordInputLogin from '../../Components/PasswordInputLogin'
import UserInputLogin from '../../Components/UserInputLogin'
export default function Login() {

  return (
    <div>
        {console.log('Deu certo')}
        <div className='Border-Screan-Login'>

            <div className='Screan-image'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <h1>Canto de Minas</h1>
            </div>

            <div className='Screan-forms-infos'>
                <div className='Screan-forms-login'>
                    <h2>Login</h2>
                    <h5>Sing in to continue</h5>
                </div>

                <div className=''>
                    <UserInputLogin />
                    <PasswordInputLogin />
                    <ButtonLogin />                    
                </div>

            </div>

        </div>
    </div>
  )
}
