import axios from "axios";
//token khdhitha mil postman min 40:02
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzllYmUyNDhmMGVkY2Y4NDIyMGIxNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTEwMDU5NzcsImV4cCI6MTY1MTI2NTE3N30.F9h-Oy6ZOmXcobry0xAVjLHRcsUJMCj6QZ5JrS36G9c"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.accessToken

const TOKEN =localStorage.getItem('accessToken')

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  export const userRequest = axios.create({
    baseURL: BASE_URL,
    //nahit token khater mezel mafamesh
    headers: { authorization: TOKEN},
  });