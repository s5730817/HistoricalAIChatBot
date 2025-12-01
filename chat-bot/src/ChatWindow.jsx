import Message from "./Message";

export default function ChatWindow({ messages }) {
    return (
        <div className="card">
            <div className="card-body">
                <ul>
                {
                    messages.map((message, index) => (
                        <div className="card-sm">
                            <li key={index}><Message role={message.sender} text={message.text}/></li>
                        </div>
                        )
                    )
                }
          </ul>
            </div>
        </div>
    );
}