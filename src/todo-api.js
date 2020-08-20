import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    return request.post(`${URL}/auth/signup`, userData);
}

export function signIn(userData) {
    return request.post(`${URL}/auth/signin`, userData);
}

export function fetchTask() {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/todo`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message };
    }
}

export function updateTask(id, userData) {
    const token = localStorage.getItem('token');
    
    try {
        return request
            .put(`${URL}/api/todo/${id}`, userData)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message };
    }
}

export function createTask(userData) {
    const token = localStorage.getItem('token');

    try {
        return request
            .post(`${URL}/api/todo`, userData)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message };
    }
}

export function deleteTask(id) {
    const token = localStorage.getItem('token');

    try {
        return request
            .delete(`${URL}/api/todo/${id}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message };
    }
}