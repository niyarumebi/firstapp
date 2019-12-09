// import * as axios from "axios";
// import {BASE_URL} from "./ConstsHelper";
//
// //컨스트 이름은 아무거나
// // 비동기란?
// //통신이 잇고 왓다갓다하는 건데
// const axioInstance = axios.create({
//     baseURL: BASE_URL,
//     timeout: 15000,
//     headers: { //통신방식. 그냥 찾아보기
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

import axios from 'axios';
import {ACCESS_KEY, BASE_URL} from './ConstsHelper';

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
    SCOPE: "public read_photos write_photos write_likes write_collections",
};

const response = (ok, data) => ({
    ok,
    data,
});

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    // withCredentials: true,
    headers: {
        'Accept': FetchConsts.APPLICATION_JSON,
        'Content-Type': FetchConsts.APPLICATION_JSON,
        'Authorization': ACCESS_KEY,
        "scope": FetchConsts.SCOPE,
    }
});

const request = async (method, url, data = {}) => {

    try {
        let axiosConfig = {
            method,
            url,
            data,
        };

        if(method === FetchConsts.GET) {
            //왜 get에만 이렇게 나눠서 따로 잡지? params는 위에 없는데
            //get일때는 params로 추가해서 쓰고, 나머지 통신은 data로 쓰는 요소인가본,,
            axiosConfig.params = data; // get은 body가없고, url에 쿼리 추가해서 쓰는 방식이라서고.
        } else {
            axiosConfig.data = data;
        }

        const result = await axiosInstance(axiosConfig);
        return response(true, result.data);

    } catch (e) {
        if(e.response) {
            // apiExceptionLog(e.response.config, e.response.data.message);
            console.log(`@@ [failed api] method:${e.response.config.method}, url: ${e.response.config.url}, data:${e.response.config.data}, message:${e.response.data.message}`);

            if(e.response.status === 400) {
                return response(false, e.response.data)
            }
            else if(e.response.status === 403) {
                console.log('로그인 만료됨. 로그인으로 이동합니다');
                return response(false, e.response.data)
            } else {
                return response(false, e.response.data)
            }
        } else {
            console.log('failed api: ', url, ', reason: ', e);
            response(false, '잘못된 요청입니다.');
        }
    }
};


const FetchHelper = {

    fetchJsonGet: (url, data) =>  request(FetchConsts.GET, url, data),

    fetchJsonPost: (url, data) => request(FetchConsts.POST, url, data),

    fetchJsonUpdate: (url, data) => request(FetchConsts.PUT, url, data),

    fetchJsonDelete: (url, data) => request(FetchConsts.DELETE, url, data),

};


export default FetchHelper;
