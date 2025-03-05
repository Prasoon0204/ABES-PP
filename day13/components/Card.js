import React from "react";

export default Card = ({userName}) => {
    return (
        <div className="card">
            <h3>Hello {userName}!</h3>
            <p>Nice to meet you!</p>
        </div>
    )
}

export const TEXT = "Hello everybody"