function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    return cpf;
  }
  
  function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); 
    telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2'); 
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); 
    return telefone;
  }
  
  const cpfInput = document.getElementById('CPF');
  const telefoneInput = document.getElementById('telefone');
  
  cpfInput.addEventListener('input', function () {
    this.value = formatarCPF(this.value);
  });
  
  telefoneInput.addEventListener('input', function () {
    this.value = formatarTelefone(this.value);
  });
  
  function somenteLetras() {
    const nome = document.getElementById('nome');
    nome.addEventListener('keypress', function (event) {
      const key = event.keyCode || event.which;
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(String.fromCharCode(key))) {
        event.preventDefault();
      }
    });
  }
  
  function validarEmail() {
    const email = document.getElementById('email').value;
    const regex = /\S+@\S+\.\S+/;
    if (!email || !regex.test(email)) {
      alert('Por favor, digite um e-mail válido.');
      return false;
    }
    return true;
  }
  
  function validarNome() {
    const nome = document.getElementById('nome').value;
    if (!nome) {
      alert('Por favor, digite seu nome completo.');
      return false;
    }
    return true;
  }
  
  const senhaInput = document.getElementById('senha');
  
  function validarSenha() {
    const senha = senhaInput.value;
    if (!senha) {
      alert('Por favor, digite uma senha.');
      return false;
    }
    if (/^[a-zA-Z]+$/.test(senha)) {
      alert('Sua senha deve conter pelo menos um caractere que não seja uma letra.');
      return false;
    }
    return true;
  }
  
  senhaInput.addEventListener('input', function () {
    if (this.value.length > 20) {
      this.value = this.value.slice(0, 20); 
    }
  });
  
  senhaInput.maxLength = 20;
  
  function validarFormulario() {
    if (validarEmail() && validarNome() && validarSenha()) {
      document.getElementById('meu-formulario').submit();
    }
  }
  