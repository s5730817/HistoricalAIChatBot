
import ChatWindow from './ChatWindow'

import { useState } from 'react'


export default function Chat() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    let message;

    const handleSend = async () => {
        console.log(input);
        setMessages(prev => [...prev, {sender: "user", text: input}]);
        
        const res = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });
      
        const data = await res.json();
        setMessages(prev => [...prev, {sender: "bot", text: data.response}]);
        setInput('');
    }

    return (
    <>
      <div className="card">
        <div className='card-body'>
          <a>Chat with Leo</a>
          <a>About</a>
        </div>
      </div>
      
      <ChatWindow messages={messages}/>

      <div className='card'>
        <div className='card-body'>
          <input className='form-control' type='text' onChange={(e) => setInput(e.target.value)} value={input} placeholder='Type your message here'/>
          <button type='button' onClick={handleSend} className='btn btn-primary' disabled={input.trim() === ''}>SEND</button>
        </div>
      </div>

    </>
    );
}