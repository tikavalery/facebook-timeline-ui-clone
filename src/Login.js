import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css";
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider"

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        
        })
        .catch((error) => alert(error.message))
        //Sign In
    };
    return (
        <div className ="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg" alt="facebook logo"/>
                <img src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview-400x400.png" alt="facebook text logo"/>
            </div>
            <Button type ="Submit" onClick ={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

