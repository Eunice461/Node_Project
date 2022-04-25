import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// 	.currentUser.accessToken;
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODhiODdkYzc2NGYyODU0YWYyODkxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzIwMzU1OSwiZXhwIjoxNjM3NDYyNzU5fQ.xsfeIDiecMc1yxS-45pzVXZjX8PFmR0U0ULVVYOr8YM";
	
export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
