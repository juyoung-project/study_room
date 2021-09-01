import Axios from "axios"

Axios.defaults.xsrfCookieName = 'csrftoken';
Axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {

            var cookie = cookies[i].replace(' ', '');
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const axiosInstance = Axios.create({
    headers :{
        "Content-Type" : "applications/json",
        "X-CSRFToken" : getCookie("csrftoken")
    }
})

/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.
*/
axiosInstance.interceptors.request.use(
    function (config) {
        // 요청 성공 직전 호출됩니다.
        // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
        config["headers"]["Authorization"] = sessionStorage.getItem("access_token")
        return config;
    },
    function (error) {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    }
);

/*
    2. 응답 인터셉터
    2개의 콜백 함수를 받습니다.
*/
axiosInstance.interceptors.response.use(
    function (response) {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다.
        .then() 으로 이어집니다.
    */
        return response;
    },

    function (error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.
    */
        return Promise.reject(error);
    }
);


const sendPost = function (url, params, callback, failcallback){
    let data = params;

    return axiosInstance
      .request({
        method: "post",
        url: url,
        data: JSON.stringify ( data ),
      })
      .then(function (resp) {
        let data = resp.data;
        let returnCode = data.returnCode;
        let returnMessage = data.returnMessage;

        data = JSON.parse( JSON.stringify(data) );

        switch (returnCode) {
          case 0:
            if (callback) {
              callback(data);
            }
          default:
            if (500 == returnCode) {
            } else {
            }

            throw { Exception: true, appData: data };
            break;
        }
        return data;
      })
      .catch(function () {
        failcallback(data);
      });
};

export default sendPost;
