'use strict'
document.getElementById('sendMessageButton').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;
    if (messageText.trim() !== "") {
        var chatBody = document.getElementById('chatBody');

        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        var messageContent = `
            <p><strong>Você:</strong> ${messageText}</p>
        `;
        messageDiv.innerHTML = messageContent;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        messageInput.value = "";
        messageInput.focus();
    }
});

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('sendMessageButton').click();
    }
});