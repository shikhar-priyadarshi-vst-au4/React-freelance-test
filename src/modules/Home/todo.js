import { Card } from '../../components/card/card'
import { CreateTodoModal } from './create.todo.modal';
import {
    useQuery,
    useQueryClient,
} from 'react-query';
import axios from 'axios';


function useTodos(userId) {
    return useQuery("todos", async () => {
        const { data } = await axios.get(
            `http://8d9f20ea3607.ngrok.io/api/list_of_task/${userId}`
        );
        return data;
    });
}


export const Todos = () => {

    const { status, data, error, isFetching } = useTodos(localStorage.getItem("user_id"));

    const todosList = new Array(10).fill({
        subject: "Tiltle of the todo",
        todoDate: "12/11/2020",
        todoTime: "23:45",
        tag: "Personal",
        status: "pending",
        notes: "teaxt message"
    })


    return <>

        <CreateTodoModal />

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
                        <div className="btn btn-primary px-4" data-toggle="modal" data-target="#myModal">
                            Create
                        </div>
                    </div>
                </div>
            </div>
            {(!!data ? data : todosList).map((v, i) => <Card {...v} key={i} />)}
        </div>
    </>
}