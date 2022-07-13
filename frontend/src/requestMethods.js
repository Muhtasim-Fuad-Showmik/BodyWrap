import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjAxNmU0ZTEzODU5N2EwYjU4MjUyNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzY4NzkyNiwiZXhwIjoxNjU3OTQ3MTI2fQ.aJG_mDz8UTwAD8rortiy62pJeAq2368zORpIg7CBpXs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})