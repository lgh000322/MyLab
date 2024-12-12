import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/todoApi";

const jwtAxios = axios.create()

const refreshJWT = async (accessToken, refreshToken) => {
    const host = API_SERVER_HOST

    const header = { headers: { 'Authorization': `Bearer ${accessToken}` } }
    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`, header)

    return res.data;
}

const beforeReq = (config) => {
    console.log("before Request...")

    const memberInfo = getCookie("member")

    if (!memberInfo) {
        console.log("member not found")
        return Promise.reject(
            {
                response: {
                    data: {
                        error: "REQUIRED_LOGIN"
                    }
                }
            }
        )
    }

    const { accessToken } = memberInfo;

    config.header.Authorization = `Bearer ${accessToken}`

    return config
}

const beforeRes = async (res) => {
    console.log("before Res ...")
    const data = res.data;

    if (data && data.error === 'ERROR_ACCESS_TOKEN') {
        const memberCookieValue = getCookie("member")

        const result = refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken)

        memberCookieValue.accessToken = result.accessToken;
        memberCookieValue.refreshToken = result.refreshToken;

        setCookie("member", JSON.stringify(memberCookieValue), 1)

        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

        return axios(originalRequest)
    }
    return res;
}

const requestFail = (err) => {
    console.log("request Fail...")

    return Promise.reject(err);
}

const responseFail = (err) => {
    console.log("response Fail ...")

    return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)
export default jwtAxios