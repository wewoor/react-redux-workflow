import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUser } from '../store/modules/user'
import Api from '../api'

class Login extends Component {

    login() {
        const user = {
            'uname': 'ziv',
            'passwd': '123456',
        }
        const { dispatch } = this.props
        Api.login(user).then((res) => {
            if (res.code === 200) {
                console.log("login is success")
            }
            dispatch(setUser(user))
        })
    }

    render() {
        return(
            <div>
                <h1>This is Login Page.</h1>
                <button onClick={this.login.bind(this)}>Dispatch Login</button>
            </div>
        )
    }
}

export default connect(state => state) (Login)