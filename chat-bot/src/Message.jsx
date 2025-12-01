import "./Message.css"

export default function Message({ role, text }) {

    if (role === "bot") {
        return (
                <div className="card-md bot-message">
                    <>{"BOT"}: {text}</>
                </div>
        );
    }
        
    return (
            <div className="card-md user-message">
                <>{"USER"}: {text}</>
            </div>
    );
}