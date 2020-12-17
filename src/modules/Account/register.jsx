import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';



export const Register = ({ toast }) => {
    const [register, setRegister] = useState({
        firstname: "",
        lastname: "",
        bussinessname: "",
        bussinessAddress: "",
        phone: "",
        industry: "",
        username: "",
        email: "",
        password: ""
    });

    const registerChangeHandler = (e) => setRegister({ ...register, [e.target.name]: e.target.value })

    const createUser = (data) => axios.post(`http://8d9f20ea3607.ngrok.io/api/signup`, data);
    const mutation = useMutation(createUser, {
        onSuccess: (data, variables, context) => {
            console.log(data);
            toast("Your account is registered successfully")
        },
        onError: (error, variables, context) => {
            console.log(error);
            toast("Something went wrong")
        }
    });

    const submit = (e) => {
        e.preventDefault();
        // console.log(register);
        mutation.mutate(register);
    }


    return <form onSubmit={submit}>
        <div className="form-row">
            <Input
                name="firstname"
                value={register.firstname}
                label="First Name"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="firstname"
                helperId="helperFirstName"
            />
            <Input
                name="lastname"
                value={register.lastname}
                label="Last Name"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="lastName"
                helperId="helperLastName"
            />

        </div>
        <div className="form-row">
            <Input
                name="bussinessname"
                value={register.bussinessname}
                label="Name of company"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="bussinessname"
                helperId="helperbussinessname"
            />
            <Input
                name="bussinessAddress"
                value={register.bussinessAddress}
                label="Address"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="bussinessAddress"
                helperId="helperbussinessAddress"
            />

        </div>
        <div className="form-row">
            <Input
                name="phone"
                value={register.phone}
                label="Mobile number"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="phone"
                helperId="helperphone"
            />
            <Input
                name="industry"
                value={register.industry}
                label="Industry Domain"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="industry"
                helperId="helperindustry"
            />

        </div>
        <div className="form-row">
            <Input
                name="username"
                value={register.username}
                label="Username"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="username"
                helperId="helperusername"
            />
            <Input
                name="email"
                value={register.email}
                label="Email Id"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                inputId="email"
                helperId="helperemail"
            />

        </div>
        <div className="form-row">
            <Input
                name="password"
                value={register.password}
                label="Password"
                onChange={registerChangeHandler}
                className={{
                    groupClass: "col-6"
                }}
                type="password"
                inputId="password"
                helperId="helperpassword"
            />
        </div>
        <Button type="submit">
            Create Account
    </Button>
    </form>
}