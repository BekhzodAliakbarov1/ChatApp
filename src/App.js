import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'


function App() {
    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <div>
            <ChatEngine 
                height='100vh'
                projectID = '33b3cbd7-63c8-4b30-8cc0-dec68b4e31e9'
                userName = {localStorage.getItem('username')}
                userSecret = {localStorage.getItem('password')}
                renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
        </div>
    )
}

export default App
