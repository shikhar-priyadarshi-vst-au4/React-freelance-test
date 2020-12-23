import { useState } from 'react';
import { Card } from '../../components/card/card'
import { TodoModal } from './todo.modal';
import { useTodos, UseCreateTodo, UseUpdateTodo } from './todo.hook';




export const Todos = () => {
    const [item, setItem] = useState({});
    const [itemId, setItemId] = useState("");
    const { status, data, error, isFetching } = useTodos(localStorage.getItem("user_id"));
    const create = UseCreateTodo();
    const update = UseUpdateTodo();

    const selectTodo = (todo) => {
        console.log(todo);
        const { createdAt, updatedAt, __v, _id, ...rest } = todo;
        setItemId(_id);
        setItem(rest);
    }

    const updateTodo = (todo) => {
        update.mutate({ ...todo, id: localStorage.getItem("user_id"), todoId: itemId });
    }

    const createTodo = (todo) => {
        create.mutate({ ...todo, id: localStorage.getItem("user_id") })
    }


    return <>

        <TodoModal fnHandler={createTodo} dataId={"createModal"} />
        <TodoModal fnHandler={updateTodo} buttonText={"Update Todo"} item={item} dataId={"updateModal"} />
        <div style={{
            height: "100vh",
            overflowY: "auto",
            background: "#1B1B1B",
        }}>

            <div>
                <div className="card mx-auto mt-2" style={{ width: "22rem" }}>
                    <div className="card-body">
                        <div className="card-title text-dark h6">Create a todo</div>
                        <p className="card-text">
                            Create a new todo, click on following action
                        </p>
                        <div className="btn btn-primary px-4" data-toggle="modal" data-target="#createModal">
                            Create
                        </div>
                    </div>
                </div>
            </div>
            {data?.reverse().map((v, i) => <Card {...v} key={i} handler={() => selectTodo(v)} dataTarget={"#updateModal"} />)}
        </div>
    </>
}