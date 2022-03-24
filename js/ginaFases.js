function escolha1 () {

    var qntdTentativa = 1
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('Escolha a ou b.');
  
      if (escolha == 'b' || escolha == 'B') {
          alert ('Acertou!')
          window.location.href="../Gina/ginaSegundaFase.html"
          break
  }   else if ( escolha != 'b' || escolha != 'B') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Oh não, seu melhor amigo morreu. Aproveite bem o luto.')
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
          window.location.href="../Gina/ginaTerceiraFase.html"
          break
  }   else if ( escolha != 'b' || escolha != 'B') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Você perguntou para uma pessoa, essa pessoa contou a vida inteira dela e você acabou perdendo MUITO tempo, seu amigo foi assasinado.')
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
              alert('Você acha mesmo que é o irmão de Gabriel??? Pense mais.')
              window.location.href="../html/.html"; 
              break
          } 
  } 
  }
  };