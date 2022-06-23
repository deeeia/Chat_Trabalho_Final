import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Construapp from "./construapp.png";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div class="container">
      <Card style={{ width: "850px", height: "350px" }}>
        {!login && (
          <div class="div_logo">
            <div>
              <img
                class="logo"
                src={Construapp}
              /*  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"*/
                alt="Facebook"
              />
              <h2 class="card-textFacebook">
                O Construapp ajuda você a se conectar com empresas de construação civil
                para você começar a construir o seu sonho!
              </h2>
            </div>
          </div>
        )}
        {!login && (
          <div class="div_login">
            <form
              class="_9vtf"
              data-testid="royal_login_form"
              action="/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU1MjU4NzM5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"
              method="post"
              onsubmit=""
              id="u_0_a_Zt"
            >
              <input
                type="hidden"
                name="jazoest"
                value="2852"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="lsd"
                value="AVo6pKT-AVE"
                autocomplete="off"
              />
              <div class="_6lux">
                <input
                  type="text"
                  name="email"
                  id="email"
                  data-testid="royal_email"
                  placeholder="Email ou telefone"
                  autofocus="1"
                  aria-label="Email ou telefone"
                />
                <input
                  type="password"
                  class="inputtext _55r1 _6luy _9npi"
                  name="pass"
                  id="pass"
                  data-testid="royal_pass"
                  placeholder="Senha"
                  aria-label="Senha"
                />
              </div>
              <input
                type="hidden"
                autocomplete="off"
                name="login_source"
                value="comet_headerless_login"
              />
              <input type="hidden" autocomplete="off" name="next" value="" />
              <div class="botao_login">
                <Card.Header>
                  {!login && (
                    <FacebookLogin
                      appId="349323863974005"
                      autoLoad={false}
                      fields="name,email,picture"
                      scope="public_profile,user_friends"
                      callback={responseFacebook}
                      icon="fa-facebook"
                    />
                  )}
                </Card.Header>
                <div class="esqueceu">
                  <a href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU1MjU4NzM5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login">
                  Esqueceu a senha?
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
        {login && ( 
        <div class="card_body">
          <Card.Body>
              <p class="card-text">
                Olá {data.name}!<br /> Você está logado(a)!
              </p>
              <div class="foto_botao">
                <Image class="foto" src={picture} roundedCircle />
                <button
                  class="botao_chat"
                  onClick={() => navigate(`/chat/${data.name}`)}
                >
                  Entrar no Chat
                </button>
            </div>
          </Card.Body>
        </div> )}
      </Card>
    </div>
  );
}
export default App;
