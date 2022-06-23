const WebSocket = require('ws');

const express = require('express')
const route = require('./routes');
const app = express()

const server = new WebSocket.Server({
        port: 8080
    },
    () => {
        console.log('Server started on port 8080');
    }
);

const users = new Set();

server.on('connection', (ws) => {
    const userRef = {
        ws,
    };
    users.add(userRef);

    ws.on('message', (message) => {
        console.log(message);
        try {

            // Parsing the message
            const data = JSON.parse(message);

            // Checking if the message is a valid one

            if (
                typeof data.sender !== 'string' ||
                typeof data.body !== 'string'
            ) {
                console.error('Invalid message');
                return;
            }

            // Sending the message

            const messageToSend = {
                sender: data.sender,
                body: data.body,
                sentAt: Date.now()
            }

            sendMessage(messageToSend);

        } catch (e) {
            console.error('Error passing message!', e)
        }
    });

    ws.on('close', (code, reason) => {
        users.delete(userRef);
        console.log(`Connection closed: ${code} ${reason}!`);
    });
});

app.post(`/chat`, async function(req, res) {
    const newChat = await route.inserir(req.body)
    return res.json({ Sucesso: 'Mensagem enviada e salva com sucesso!', newChat })
});

const sendMessage = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message));
    });
}

app.listen(3005 || process.env.PORT)