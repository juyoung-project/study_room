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
