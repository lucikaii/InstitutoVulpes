'use strict'
document.getElementById('send-message-button').addEventListener('click', function(){
    var messageInput = document.getElementById('messageInput')
    var messageText = messageInput.value

    if(messageText.trim() !==""){

        var chatBody = document.getElementById('chat-body')

        var messageSelf = document.createElement('div')
        messageSelf.classList.add('message-self')

        var span = document.createElement('span')
        span.textContent = messageText
        messageSelf.appendChild(span)

        chatBody.appendChild(messageSelf)
        chatBody.scrollTop = chatBody.scrollHeight

        messageInput.value = ""
        messageInput.focus()
    }

})

document.getElementById('messageInput').addEventListener('keypress', function(event){

    if(event.key === 'Enter'){
        event.preventDefault()
        document.getElementById('send-message-button').click()
    }
})