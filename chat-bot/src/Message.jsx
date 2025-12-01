import "./Message.css"

export default function Message({ role, text }) {

    if (role === "bot") {
        return (
                <div className="card-md bot-message">
                    <>{role}: {text}</>
                </div>
        );
    }
        
    return (
            <div className="card-md user-message">
                <>{"THIS IS USER"}: {text}</>
            </div>
    );
}