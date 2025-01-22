function gerarNumeros() {
    const numerosDiv = document.getElementById('numeros');
    const nome = document.getElementById('floatingInput').value.trim();
    const contato = document.querySelector('input[placeholder="Telephone"]').value.trim();
  
    if (!nome || !contato) {
      alert('Por favor, preencha o nome e o contato.');
      return;
    }
  
    const numeros = [];
    for (let i = 0; i < 4; i++) {
      const numeroAleatorio = Math.floor(1000 + Math.random() * 9000); // Garante 4 dígitos
      numeros.push(numeroAleatorio);
    }
  
    const listaNumeros = JSON.parse(localStorage.getItem('listaNumeros')) || [];
    listaNumeros.push({
      nome,
      contato,
      numeros: numeros.join(' - ')
    });
    localStorage.setItem('listaNumeros', JSON.stringify(listaNumeros));
  
    document.getElementById('floatingInput').value = '';
    document.querySelector('input[placeholder="Telephone"]').value = '';
    numerosDiv.innerHTML = 'Clique no botão para gerar os números';
  
    alert('Dados registrados com sucesso!');
  }
  function carregarLista() {
    const listaElement = document.getElementById('listaNumeros');
    const listaNumeros = JSON.parse(localStorage.getItem('listaNumeros')) || [];
    listaElement.innerHTML = ''; 
  
    listaNumeros.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `<strong>${index + 1}. ${item.nome}</strong> (${item.contato}): ${item.numeros}`;
      listaElement.appendChild(li);
    });
}
  window.onload = carregarLista;

// login

  

  function verificarAcesso() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!user) {
      alert('Você precisa estar logado para acessar esta página.');
      window.location.href = 'login.html';
      return;
    }
  
    if (user.role === 'funcionario') {
      document.getElementById('historico').style.display = 'none';
    }
}
  
  function carregarLista() {
    const listaElement = document.getElementById('listaNumeros');
    const listaNumeros = JSON.parse(localStorage.getItem('listaNumeros')) || [];
    listaElement.innerHTML = '';
  
    listaNumeros.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `<strong>${index + 1}. ${item.nome}</strong> (${item.contato}): ${item.numeros}`;
      listaElement.appendChild(li);
    });
}
  
  window.onload = () => {
    verificarAcesso();
    carregarLista();
};
  
function verificarAcesso() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!user) {
      alert('Você precisa estar logado para acessar esta página.');
      window.location.href = 'login.html';
      return;
    }
  
    const linkListagem = document.getElementById('linkListagem');
    if (linkListagem) {
      if (user.role === 'admin') {
        linkListagem.style.display = 'block';
      } else if (user.role === 'funcionario') {
        linkListagem.style.display = 'none';
      }
    }
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }
  
  window.onload = verificarAcesso;
  