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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': ACCESS_KEY,
        "scope": "public read_photos write_photos",
    }
});

const request = async (method, url, data = {}) => {

    try {
        let axiosConfig = {
            url,
            method,
            data,
        };

        if(method === FetchConsts.GET) {
            //왜 get에만 이렇게 허지? 왜 어떻게 axios로 create하지않은?
            //axiosConfid에 params가 있고 거기에 data를 넣은거야?
            //그냥 바로 키값 삽입한걸로 생각하면 되나..
            axiosConfig.method = FetchConsts.GET;
            axiosConfig.params = data;
        } else {
            //get외 post, put delete는 데이터 필요하니까...
            axiosConfig.data = data;
        }

        const result = await axiosInstance(axiosConfig);
        return response(true, result.data); // 왜 그냥 익명오브젝트로 아니고 response를 한 번 더 썼을까? 밑에 e.reponse??랑은 별개같은데

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
