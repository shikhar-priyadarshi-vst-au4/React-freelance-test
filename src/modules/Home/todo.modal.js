import { useState, useEffect } from 'react';
import { Input } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';

export const TodoModal = ({ fnHandler, item = "", buttonText = "Create Todo", dataId }) => {
    const [todo, setTodo] = useState({
        subject: "",
        todoDate: "",
        todoTime: "",
        tag: "",
        status: "",
        notes: ""
    })

    useEffect(() => {
        setTodo({ ...todo, ...item });
    }, [item])

    const todoEntries = Object.entries(todo);
    const changeHandler = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

    const submit = () => {
        fnHandler(todo);
    }
    return <>
        <Modal buttonText={buttonText} submitHandler={submit} id={dataId}>
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