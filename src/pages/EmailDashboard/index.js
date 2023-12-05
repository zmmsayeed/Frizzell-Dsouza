import { Component } from "react";
import Login from "../Login";

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
        if (!this.state.isAuthenticated) {
            return <Login
        }
        return (
            <p>Email Dashboard</p>
        )
    }
}

export default EmailDashboard;