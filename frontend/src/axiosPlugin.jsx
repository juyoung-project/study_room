import React from "react";
import axios from "axios";

export default class CustomAxios extends React.Component {
  render() {
    return <button onClick={this.click} className="btn brand-color" type="submit">로그인</button>;
    // <button onClick={this.click}>aaa</button>;
  }

  click = () => {
    alert("click");
    this.sendAxios(
      "http://localhost:80/test",
      {},
      function (rtn) {
        alert("function (rtn)");
      },
      function () {
        alert(" 실패 ㅠ");
      }
    );
  };

  sendAxios = (url, params, callback, failcallback) => {
    let data = params;
    alert("sendAxios");

    return axios
      .request({
        method: "post",
        url: url,
        data: data,
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
        alert("실패!!!");
        failcallback(data);
      });
  };
}

// const customAxios=() => {
//   this.prototype.sendAxios = function (url, params, callback, failcallback) {
//       alert(111111111111111)
//       let data = params;

//       return axios.request({
//           method: 'post',
//           url: url,
//           data: data
//       }).then(function (resp) {
//           let data = resp.data;
//           let returnCode = data.returnCode;
//           let returnMessage = data.returnMessage;

//           data = JSON.stringify(data)

//           switch (returnCode) {
//               case 0 :
//                   if (callback) {
//                       callback(data)
//                   }
//               default :
//                   if (500 == returnCode) {

//                   } else {

//                   }

//                   throw  {'Exception': true, 'appData': data}
//                   break;
//           }
//           return data

//       }).catch(function (){
//           alert('실패!!!')
//           failcallback(data)
//       })

//   }
// }
