'use strict';

const btnLogin = document.getElementById('btn');

async function loginValidation() {
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('senha').value;
    let userStatus = false;

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            alert('Houve um problema com a solicitação de login.');
            return null;
        }
    };

    const responsavel = await fetchData('https://vulpes-back.onrender.com/v1/Vulpes/Responsavel');
    const gestao = await fetchData('https://vulpes-back.onrender.com/v1/Vulpes/Gestao');
    const professor = await fetchData('https://vulpes-back.onrender.com/v1/Vulpes/Professor');

    if (responsavel && responsavel.responsavel) {
        for (let user of responsavel.responsavel) {
            if (user.email === inputEmail && user.senha === inputPassword) {
                userStatus = true;
                localStorage.setItem('userId', user.id);
                window.location.href = '../pages/chat.html';
                return;
            }
        }
    }

    if (gestao && gestao.gestao) {
        for (let user of gestao.gestao) {
            if (user.email === inputEmail && user.senha === inputPassword) {
                userStatus = true;
                localStorage.setItem('userId', user.id);
                window.location.href = '../pages/turmas.html';
                return;
            }
        }
    }

    if (professor && professor.professor) {
        for (let user of professor.professor) {
            if (user.email === inputEmail && user.numero_matricula === inputPassword) {
                userStatus = true;
                localStorage.setItem('userId', user.id);
                window.location.href = '../pages/frequencia.html';
                return;
            }
        }
    }

    if (!userStatus) {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

btnLogin.addEventListener('click', loginValidation);
