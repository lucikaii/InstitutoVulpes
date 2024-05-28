'use stric'
document.getElementById('sendMessageButton').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;
    if (messageText.trim() !== "") {
        var chatBody = document.getElementById('chatBody');

        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');

        var userImgDiv = document.createElement('div');
        userImgDiv.classList.add('user-img', 'responsavel');

        var userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('user-info');
        userInfoDiv.appendChild(userImgDiv);
        var strong = document.createElement('strong');
        strong.textContent = 'Você:';
        userInfoDiv.appendChild(strong);

        var messageAreaDiv = document.createElement('div');
        messageAreaDiv.classList.add('message-area');

        var messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        var p = document.createElement('p');
        p.textContent = messageText;
        messageContentDiv.appendChild(p);

        messageAreaDiv.appendChild(messageContentDiv);
        messageDiv.appendChild(userInfoDiv);
        messageDiv.appendChild(messageAreaDiv);

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
