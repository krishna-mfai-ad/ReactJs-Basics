import propType from 'prop-types'

function UserGreeting(props) {
    const welcomeMessage=<h2 className="welcome-message">Welcome {props.userName}</h2>
    const loginPrompt=<h2 className="login-prompt">Login Bro!</h2>
    return (
        props.isLogIn ? welcomeMessage : loginPrompt
    );
}

UserGreeting.propType={
    isLogIn:propType.bool,
    userName:propType.string,
}

UserGreeting.defaultProps={
    isLogIn:false,
    userName:"Guest",
}
export default UserGreeting