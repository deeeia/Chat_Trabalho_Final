const Message = require('./Message')

const inserir = async (chat) => {

  const chatModel = new Message(chat)
  const newChat = await chatModel.save()
  
  return newChat 
}

module.exports = {
  inserir
  }
  