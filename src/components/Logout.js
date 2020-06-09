import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {receiveAuthLogout} from '../actions/auth';
import {connect} from 'react-redux';


class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(receiveAuthLogout());
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }
}

export default connect()(Logout);