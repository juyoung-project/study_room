import React, { useState } from "react";
// 되는지 다시 해보기
// import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import { Route } from "react-router-dom";
import axios from "axios";

const KakaoSignUp = () => {
  const [id, setId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [provider, setProvider] = useState("kakao");

  const responseKakao = (res) => {
    // this.$_send("/api/checked/user", {"email" : res.email}, function( resp ){
    //   Route.getProfile("-->")
    // },function(){
    //   Route.go->
    // })
    setAccessToken(res.response.access_token);
    const {
      profile: { id: id },
      response: { access_token: accessToken, refresh_token: refreshToken },
    } = res;

    // 서버에게 token넘겨주기
  };

  const responseFail = (err) => {
    console.log(err);
  };

  return (
    <KakaoLogin
      jsKey="7b4e38b98de6db87145856c4a449cb5d"
      onSuccess={responseKakao}
      onFailure={responseFail}
      getProfile="true"
      buttonText="KakaoSignUp with Kakao"
    />
  );
};

export default KakaoSignUp;
