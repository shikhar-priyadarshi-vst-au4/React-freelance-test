import { useMutation, useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

const createTodo = (data) => axios.post(`http://54.151.174.48:8000/api/add_task/${data.id}`, data, {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('access_token')}`
    }
});

const updateTodo = (data) => axios.put(`http://54.151.174.48:8000/api/update_task/${data.id}/${data.todoId}`, data, {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('access_token')}`
    }
});

export const UseCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(createTodo, {
        onSuccess: (data, variables, context) => {
            console.log(data);
            queryClient.invalidateQueries("todos");
        },
        onError: (error, variables, context) => {
            console.log(error);

        }
    });
}

export const UseUpdateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(updateTodo, {
        onSuccess: (data, variables, context) => {
            console.log(data);
            queryClient.invalidateQueries("todos");
        },
        onError: (error, variables, context) => {
            console.log(error);

        }
    });
}

export const useTodos = (userId) => {
    return useQuery("todos", async () => {
        const token = localStorage.getItem('access_token');
        const { data } = await axios.get(
            `http://54.151.174.48:8000/api/list_of_task/${userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        );
        return data;
    });
}
