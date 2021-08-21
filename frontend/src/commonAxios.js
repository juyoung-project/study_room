import Axios from "axios"

const axiosInstance = Axios.create({
    headers :{
        "Content-Type" : "applications/json",
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

        data = JSON.stringify(data);

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