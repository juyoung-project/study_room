import React from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
export default class CustomAxios extends React.Component {

  render() {
    return <a onClick={this.click} className="btn brand-color" >로그인</a>;
  }

  getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
  click = () => {
    alert("click");
    this.sendAxios(
      "/api/login",
      {},
      function (rtn) {
          console.log(  rtn.data )
          alert("여기서 페이지 이동 한다.")
        alert("function (rtn)");
      },
      function () {
        alert(" 실패 ㅠ");
      }
    );
  };

  sendAxios = (url, params, callback, failcallback) => {
    let data = params;

    return axios
      .request({
        method: "post",
        url: url,
        data: data,
      })
      .then(function (resp) {
        let data = resp.data;
        alert(1111)
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
