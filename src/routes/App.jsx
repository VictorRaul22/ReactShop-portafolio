import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Login} from '@pages/Login'
import {MyAccount} from '@pages/MyAccount'
import {EmailSent} from '@pages/EmailSent';
import {PasswordRecovery} from '@pages/PasswordRecovery';
import { NotFound } from '@pages/NotFound';
import {Home} from '@pages/Home';
import {NewPassword} from '@pages/NewPassword'
import { CreateAccount } from '@pages/CreateAccount';
import { Orders } from '@pages/Orders';
import {Layout} from '@containers/Layout'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import '@styles/_vars.scss'
import '@styles/global.css';
function App() {
  /*
  Reac-router  
  path: ruta en la que debe de estar
  element: el componente que se cargara <component/>
  documentacion - https://reactrouter.com/docs/en/v6
  */
  const initialState=useInitialState();
  // console.log(initialState)
  return (
    <AppContext.Provider value={initialState}>
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
    </AppContext.Provider>
    
  )
}

export default App