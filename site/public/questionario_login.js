var usuario = {
    email: "luccas@email.com",
    senha: "123456789"
}
    function entrar() {

      var usuario = {
        email: document.getElementById(iptemail),
        senha: iptsenha.value
    }

        if (usuario.usuario == "" || usuario.senha == "") { 
            alert("Erro de Senha ou Usuário!") 
        } else {
            fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;

                    setTimeout(function () {
                        window.location = "./dashboard/cards.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

        }

    function calculateResult() {
      var answers = document.querySelectorAll('input[type="radio"]:checked');
      
      if (answers.length !== 10) {
        alert("Por favor, responda todas as perguntas!");
        return;
      }
      
      var result = 0;
      for (var i = 0; i < answers.length; i++) {
        result += parseInt(answers[i].value);
      }
      
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = "Sua orientação política é: " + determineOrientation(result) + " " +
      "<br>Disclaimer: O questionário é baseado em métricas e seu resultado poderá não refletir na sua efetiva orientação política.";
      resultElement.style.display = 'block';
      var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Esquerda', 'Centro-Esquerda', 'Centro', 'Centro-Direita', 'Direita', 'Extrema Direita'],
    datasets: [{
      label: 'Orientação Política dos Usuários',
      data: [5, 10, 15, 20, 25, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1
      }
    }
  }
});

    }
    
    function determineOrientation(score) {
      var posicionamento;
      
      if (score < 15) {
        posicionamento = "Esquerda";
      } else if (score < 25) {
        posicionamento = "Centro-Esquerda";
      } else if (score < 35) {
        posicionamento = "Centro";
      } else if (score < 45) {
        posicionamento = "Centro-Direita";
      }
        else if (score < 55) {
          posicionamento = "Direita";
      } else {
        posicionamento = "Extrema Direita";
      }
      console.log(posicionamento, usuario.email, usuario.senha); 
      
      funcaofetch(posicionamento, usuario.email, usuario.senha);

      return posicionamento;
    }
  
    function funcaofetch(posicionamento, email, senha){
    console.log("Estou antes da fetch!");

    fetch("/questionario/cadastrar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    resultado: posicionamento, 
                    email_server: email, 
                    senha_server: senha
                })
            }).then(function (resposta) {
                console.log("resposta: ", resposta);
                if (resposta.ok) {
                    alert('Resultado computado com sucesso.')
                } else {
                    alert ("Houve um erro ao computar seu resultado.");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                // finalizarAguardar();
            });

            // return false;
          }

