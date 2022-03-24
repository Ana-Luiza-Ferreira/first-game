function escolha1 () {

    var qntdTentativa = 1
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('Escolha a ou b.');
  
      if (escolha == 'a' || escolha == 'A') {
          alert ('Acertou!')
          window.location.href="../Gabriel/gabrielSegundaFase.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Oh que peninha, o zelador estava de mal humor e te matou.')
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
  
      if (escolha == 'a' || escolha == 'A') {
          alert ('Acertou!')
          window.location.href="../Gabriel/gabrielTerceiraFase.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Havia uma pessoa te esperando com uma faca do lado de fora, você morreu.')
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
  
      if (escolha == 'b' || escolha == 'B') {
          alert ('Acertou!')
          window.location.href="../html/ganhador.html"
          break
  }   else if ( escolha != 'b' || escolha != 'B') {
          if (qntdTentativa > 0) {
          alert (`Oh não, você escolheu errado. Ainda te restam mais ${qntdTentativa} tentativas.`)
          qntdTentativa --
          } else {
              alert('Que triste, você escolheu errado e por isso vai ficar na lista dos meninos malvados do Papai Noel por 3 longos anos, que dó vai ficar sem presentinho.')
              window.location.href="../html/fim.html"; 
              break
          } 
  } 
  }
  };