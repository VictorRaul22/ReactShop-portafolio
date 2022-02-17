import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Layout} from '../containers/Layout'
import {Login} from '../pages/Login'
import {MyAccount} from '../pages/MyAccount'
import {EmailSent} from '../pages/EmailSent';
import {PasswordRecovery} from '../pages/PasswordRecovery';
import {Home} from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import {NewPassword} from '../pages/NewPassword'
import '../styles/global.css';
import { CreateAccount } from '../pages/CreateAccount';
import { Orders } from '../pages/Orders';
function App() {
  /*
  Reac-router  
  path: ruta en la que debe de estar
  element: el componente que se cargara <component/>
  documentacion - https://reactrouter.com/docs/en/v6
  */
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login />} />	
          <Route path="/account" element={<MyAccount />} />	
          <Route path='/emailSent' element={<EmailSent/>}/>
          <Route path='/recovery-password' element={<PasswordRecovery/>}/>
          <Route path='/new-password' element={<NewPassword/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='*'element={<NotFound/>}/>
          
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App