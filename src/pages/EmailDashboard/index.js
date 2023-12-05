import { Component } from "react";

// importing stylesheel
import './style.css';

class EmailDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
    }

    componentDidMount() {

    }

    render() {
        if (this.state.isAuthenticated) {
            return <p>You are logged in</p>
        }
        return (
            <p>Email Dashboard</p>
        )
    }
}

export default EmailDashboard;