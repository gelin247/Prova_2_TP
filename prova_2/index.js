function start() {
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const cancel = document.getElementById("cancel");
    const login = document.getElementById("login");
    const error = document.getElementById('error');

    cancel.addEventListener('click', (event) => {
        user.value = '';
        password.value = '';
        if(error.classList.contains('error')) {
            error.classList.remove(['error'])
            error.classList.add(['errorNone'])
            error.innerHTML = '';
        }
    })
    login.addEventListener('click', (event) => {
        if(user.value === '' || password.value === '') {
            error.classList.remove(['errorNone']);
            error.innerHTML = "Campos 'Usuário' e 'Senha' são obrigatórios";
            error.classList.add(['error']);
        } else {
            if(user.value !== 'admin' && password.value !== 'abc123') {
                error.innerHTML = 'Usuário ou Senha inválidos';
                error.classList.remove(['errorNone']);
                error.classList.add(['error']);
            } else {
                window.open('login.html');
                window.close();
            }
        }
    })
}

start();
