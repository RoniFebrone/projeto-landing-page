var SetaEsquerdaC = window.document.getElementById("Seta-esquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaDireitaC = window.document.getElementById("Seta-direita")



    function RolarParaDireita() {
        console.log("RolarParaDireita() foi chamada")
      

      Bruna.style ="display:none"
      Samantha.style = "display:flex"
      SetaEsquerdaC.style= "display:flex; margin-top:20px"
      SetaDireitaC.style= "display:none"
      
  }

    function RolarParaEsquerda(){
        console.log("RolarParaEsquerda() Foi chamado")
      

    Bruna.style ="display:flex"
    Samantha.style = "display:none"
    SetaEsquerdaC.style= "display:none"
    SetaDireitaC.style= "display:flex;  margin-top:20px"


  }

