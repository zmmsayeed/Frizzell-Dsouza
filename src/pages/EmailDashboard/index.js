import { Component } from "react";
import Login from "../Login";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the quill styles
// importing stylesheel
import './style.css';

class EmailDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            editorHtml: '',
            testEmail: false
        }
    }

    changeAuth = (data) => {
        console.log("Data in changeAuth in EmailDashboard: ", data)
        this.setState({
            isAuthenticated: data.isAuthenticated
        })
    }

    logout = () => {
        this.setState({
            isAuthenticated: false
        })
    }

    handleHtmlChange = (html) => {
        this.setState({ editorHtml: html });
    }

    handleCheckChange = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Here you would typically handle the submission to the backend
        const { editorHtml, testEmail } = this.state;
        console.log(testEmail, editorHtml);
    }

    render() {


        if (!this.state.isAuthenticated) {
            return <Login isAuthenticate={this.state.isAuthenticated} changeAuth={this.changeAuth} />
        }

        const modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                [{ 'direction': 'rtl' }],                         // text direction
                ['link', 'image', 'video'],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
            ]
        };

        return (
            <div id="email_dashboard">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Email Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item text-dark" onClick={this.logout}>
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mt-5">
                    <h3 className="mb-4">Email to Subscribers: </h3>
                    <ReactQuill
                        name="editorHtml"
                        value={this.state.editorHtml}
                        onChange={this.handleHtmlChange}
                        modules={modules}
                    />
                    <p className="my-4 d-block">
                        <input type="checkbox" className='mr-2'
                               name="testEmail"
                               value={this.state.testEmail}
                               onChange={this.handleCheckChange}
                        />
                        This is a test email
                    </p>
                    <button onClick={this.handleSubmit}>Send Email</button>
                </div>
            </div>
        )
    }
}

export default EmailDashboard;