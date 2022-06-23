# Trabalho Final - Chat
Trabalho final da matéria de Arquitetura de Aplicações Web.

## CHAT
* Autenticação OAuth2.0 pelo Facebook;
* Retorna foto de perfil e nome de usuário do Facebook;
* Biblioteca WebSocket;
* Aplicação executando em HTTPS que é o padrão permitido pelo Facebook;
## Telas
### Login
![image](https://user-images.githubusercontent.com/67376732/175220271-5f09fb27-8bd8-47ac-93af-4fcb3d06703f.png)
OBS: Campos de email e senha meramente ilustrativos.
### Autenticação com o Facebook
![image](https://user-images.githubusercontent.com/67376732/175220552-c5ac40c8-1d74-43a9-9f36-630d6ed06eb9.png)
### Tela do usuário 1
![image](https://user-images.githubusercontent.com/67376732/175220937-7425aa05-ce40-446c-8236-a85bd83fddc6.png)
### Tela do usuário 2
![image](https://user-images.githubusercontent.com/67376732/175220976-b3054bcd-f750-443f-b05d-bb0677f78a3e.png)


# Build
* Clonar o repositório:
  * https://github.com/deeeia/Chat_Trabalho_Final.git
  * gh repo clone deeeia/Chat_Trabalho_Final
* Instalar as dependências do front-end e iniciar a aplicação, no terminal digitar os comandos:
  * cd react-fb_login
  * npm install --legacy-peer-deps (A biblioteca react-facebook-login gera um erro sem o --legacy-peer-deps)
  * npm start
    * Aplicação vai executar na seguinte URL: https://localhost:3001/
* Instalar as dependências do back-end e iniciar o server, no terminal digitar os comandos:
  * cd server 
  * npm install
  * npm start
### Docker Container
Outra opção para iniciar o chat e o servidor é com a utilização do Docker Container:
* Baixar e instalar o Docker Container, no terminal digitar os seguintes comandos:
  * cd react-fb_login
  * docker compose up build
* OBS: O Docker executa a aplicação em HTTP, e o Facebook aceita somente HTTPS então no momento do login dará um erro de HTTPS. 
### Banco de Dados
Aplicativo não está conectado com um banco de dados, o time não conseguiu implementar essa funcionalidade ao chat.
### Heroku
Tentativa de publicar o aplicativo no Heroku:
* https://construappchat.herokuapp.com/
OBS: Não funcionou
