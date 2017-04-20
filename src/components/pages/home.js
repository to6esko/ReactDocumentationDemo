import React from 'react';
import ReactDOM from 'react-dom';

/*
export default class Home extends React.Component {
    allName() {
        const user = {
            firstName: "Todor",
            lastName:"Krastev"
        }
        return user.firstName + ' ' + user.lastName;
    }
    render() {

        return (
            <div>
                <h1>Hello, {this.allName()} </h1>
            </div>
        )
    }
}





function NewDate(props) {
    return <h1>It is {props.date.toLocaleTimeString()}</h1>
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({ date: new Date() });
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Hello, world!</h1>
                    <NewDate date={this.state.date} />
                </div>
            </div>
        )
    }
}


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isEditing: true };
    }
    handleClick() {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    }
   
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isEditing ? "ON" : "OFF"}
            </button>
        );
    }
}
*/
/*
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    greeting(props) {
        const isLoggedIn = this.state.isLoggedIn;

        if (isLoggedIn) {
            return <h1>Welcome back!</h1>
        } else {
            return <h1>Plese sing up.</h1>
        }
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        /*
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick.bind(this)} />
        }
        
        




        return (
            <div>
            <div>
                {this.greeting()}
            </div>
            <div>
                    {isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick.bind(this)} />
                    ) : (
                            <LoginButton onClick={this.handleLoginClick.bind(this)} />
                        )
                    }    
                </div>
            </div>
        )
    }
}



function WarninigBanner(props) {
        if (!props.warn) {
            return null;
        } else {
            return (
                <div className="warning">
                    Warning!
                </div>
            );
        }
    }

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarninigBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick.bind(this)}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}

*/




export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    newDate() {

    return 
}
    tick() {
        let date = this.state.date;
        <h1>It is {date.toLocaleTimeString()}</h1>
        this.setState({ date: new Date() });
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <div date={this.state.date}>
                    {this.date()}
                    </div>
               </div> 
       )
   }
}

