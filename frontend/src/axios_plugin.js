import axios from "axios";

const customAxios=() => {
    this.prototype.sendAxios = function (url, params, callback, failcallback) {
        alert(111111111111111)
        let data = params;

        return axios.request({
            method: 'post',
            url: url,
            data: data
        }).then(function (resp) {
            let data = resp.data;
            let returnCode = data.returnCode;
            let returnMessage = data.returnMessage;

            data = JSON.stringify(data)

            switch (returnCode) {
                case 0 :
                    if (callback) {
                        callback(data)
                    }
                default :
                    if (500 == returnCode) {

                    } else {

                    }

                    throw  {'Exception': true, 'appData': data}
                    break;
            }
            return data

        }).catch(function (){
            alert('실패!!!')
            failcallback(data)
        })

    }
}


export default customAxios
