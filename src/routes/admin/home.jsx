import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/admin/navbar.jsx';

class AdminHome extends Component {
    constructor(props) {
        super(props);
    }

    state = {}

    render() {
        return (
                <Navbar />
        );
    }
}

export default AdminHome;