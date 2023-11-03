import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTZkZTc1YjgxZGVjOTY3ZmJkZWQ5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODEyMDA1NywiZXhwIjoxNjg4Mzc5MjU3fQ.KyFhiFm3-Xo14fzE6kxHcWX3nwxiueBD6Rq7uFrmiqE";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
