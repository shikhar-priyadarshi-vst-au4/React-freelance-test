import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import { Input } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';

export const CreateTodoModal = ({ children }) => {
    const [todo, setTodo] = useState({
        subject: "",
        todoDate: "",
        todoTime: "",
        tag: "",
        status: "",
        notes: ""
    })
    const todoEntries = Object.entries(todo);
    const changeHandler = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });
    const createTodo = (data) => axios.post(`http://8d9f20ea3607.ngrok.io/api/add_task/${data.id}`, data);
    const mutation = useMutation(createTodo, {
        onSuccess: (data, variables, context) => {
            console.log(data);

        },
        onError: (error, variables, context) => {
            console.log(error);

        }
    });

    const submit = () => {
        mutation.mutate({ ...todo, id: localStorage.getItem("userId") })
    }
    return <>
        <Modal buttonText={"Create Todo"} submitHandler={submit}>
            <div className="container-fluid">
                <div className="row row-cols-2">
                    {todoEntries.map((v, i) => <div className="col-6" key={i}>
                        <Input
                            name={v[0]}
                            value={v[1]}
                            label={v[0].toUpperCase()}
                            onChange={changeHandler}
                            className={{
                                groupClass: "col"
                            }}
                            inputId={v[0]}
                            helperId={`helper${v[0]}`}
                        />
                    </div>)}
                </div>
            </div>
        </Modal>
    </>
}