import Message from "./Message";

export default function ChatWindow({ messages }) {
    return (
        <div className="card">
            <div className="card-body">
                <ul>
                    {
                        messages.map((message, index) => (
                            <Message key={index} role={message.sender} text={message.text}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}