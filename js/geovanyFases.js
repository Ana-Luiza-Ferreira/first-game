function escolha1 () {

    var qntdTentativa = 1 
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('Escolha a ou b.');
  
      if (escolha == 'a' || escolha == 'A') {
          alert ('Acertou!')
          window.location.href="../Geovany/geovanySegundaFase.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Você decidiu comer camarão, mas é SUPER alérgico. Então você morreu, que lástima.')
              window.location.href="../html/fim.html"; 
              break
          } 
  } 
  }
  };
  
  function escolha2 () {
  
    var qntdTentativa = 1
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('Escolha a ou b.');
  
      if (escolha == 'b' || escolha == 'B') {
          alert ('Acertou!')
          window.location.href="../Geovany/geovanyTerceiraFase.html"
          break
  }   else if ( escolha != 'b' || escolha != 'B') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Você bateu na porta, mas Gabriel estava dormindo e não te atendeu, você ficou esperando e acabou ficando resfriado.')
              window.location.href="../html/fim.html"; 
              break
          } 
  } 
  }
  };
  
  function escolha3 () {
  
    var qntdTentativa = 1
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('Escolha a ou b.');
  
      if (escolha == 'a' || escolha == 'A') {
          alert ('Acertou!')
          window.location.href="../html/ganhador.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Você escolheu errado.')
              window.location.href="../html/fim.html"; 
              break
          } 
  } 
  }
  };