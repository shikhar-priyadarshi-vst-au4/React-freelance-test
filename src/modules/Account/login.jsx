import { useState } from 'react';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Login = ({ toast }) => {
    const history = useHistory();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

   const loginChangeHandler = (e) => setLogin({ ...login, [e.target.name]: e.target.value })

    const loginUser = (data) => axios.post(`http://54.151.174.48:8000/api/signin`, data);
    const mutation = useMutation(loginUser,{
        onSuccess: (data, variables, context) => {
            console.log(data);
            toast("Login succcessfull, loading please wait")
            localStorage.setItem("access_token", data.data.token);
            localStorage.setItem("user_id", data.data.user._id);
            history.push('/todo/activities');
        },
        onError: (error, variables, context) => {
            toast(error.response.data.error);
        }
    });

    const submit = (e) => {
        e.preventDefault();
        mutation.mutate(login);
    }



    return <form onSubmit={submit}>
        <div className="form-row">
            <Input
                name="email"
                value={login.email}
                label="Email Id"
                onChange={loginChangeHandler}
                className={{
                    groupClass: "col-12"
                }}
                inputId="email"
                helperId="helperemail"
            />
            <Input
                name="password"
                value={login.password}
                label="Password"
                onChange={loginChangeHandler}
                className={{
                    groupClass: "col-12"
                }}
                inputId="password"
                helperId="helperpassword"
            />
        </div>
        <Button className="px-5 btn btn-primary" type="submit">
            Login
    </Button>
    </form>
}