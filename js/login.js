const users = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'funcionario', password: '1234', role: 'funcionario' },
  ];

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'index.html';
    } else {
      alert('Usuário ou senha inválidos.');
    }
  });

  