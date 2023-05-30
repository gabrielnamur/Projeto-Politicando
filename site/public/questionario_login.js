var usuario = {
  email: "luccas@email.com",
  senha: "123456789"
}

function entrar() {

  var usuario = {
    email: document.getElementById('iptemail').value,
    senha: document.getElementById('iptsenha').value
  }

  console.log(usuario);

  if (usuario.email == "" || usuario.senha == "") {
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

          //var varnometela = document.getElementById("divnometela");
          //varnometela.innerHTML = `<span>${json.nome}</span>`;

          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.idUsuario;

          console.log(json.email);
          console.log(json.nome);
          console.log(json.idUsuario);

          setTimeout(function () {
            window.location = "telalogada.html";
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

  
  var questao01 = document.getElementsByName("q1")
  var questao04 = document.getElementsByName("q4")
  var questao05 = document.getElementsByName("q5")
  var questao09 = document.getElementsByName("q9")
  // var valorQuestao01;
  // var valorQuestao04;
  // var valorQuestao05;
  // var valorQuestao09;
  var listaValoresPolos = []
  for (var i = 0; i < questao01.length; i++) {
    if (questao01[i].type === 'radio' && questao01[i].checked) {
      listaValoresPolos.push(questao01[i].value);
    }
    if (questao04[i].type === 'radio' && questao04[i].checked) {
      listaValoresPolos.push(questao04[i].value);
    }
    if (questao05[i].type === 'radio' && questao05[i].checked) {
      listaValoresPolos.push(questao05[i].value);
    }
    if (questao09[i].type === 'radio' && questao09[i].checked) {
      listaValoresPolos.push(questao09[i].value);
    }
  }

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
    "<br>Como calculamos? Cada pergunta possui diversas alternativas, e cada alternativa tem um valor atribuído de 1 a 5 pontos. Ao responder todas as perguntas, o sistema soma os pontos correspondentes às suas escolhas." + 
    "<br>Com base nos pontos obtidos, o Politicando® classifica sua orientação política em cinco categorias principais: esquerda, centro-esquerda, centro, centro-direita e direita. Essas categorias são determinadas com base em faixas de pontuação. Vamos entender melhor:" +
    "<br>Se a soma dos pontos for menor que 15, sua orientação política é considerada de esquerda." +
    "<br>Se a soma dos pontos estiver entre 15 e 24, sua orientação política é classificada como centro-esquerda." +
    "<br>Se a soma dos pontos estiver entre 25 e 34, sua orientação política é classificada como centro." + 
    "<br>Se a soma dos pontos estiver entre 35 e 44, sua orientação política é classificada como centro-direita." +
    "<br>Se a soma dos pontos for igual ou superior a 45, sua orientação política é considerada de direita." +
    "<br>Essa metodologia de pontuação e categorização permite que o site Politicando forneça uma estimativa geral da sua orientação política com base nas suas respostas ao questionário. No entanto, é importante lembrar que a política é um assunto complexo e abrangente, e o questionário do Politicando oferece apenas uma abordagem simplificada para esse fim.";
  resultElement.style.display = 'block';

  // Dados e opções do gráfico (mantidos iguais)
  var data = {
    labels: ['Economia', 'Educação', 'Saúde', 'Meio Ambiente'],
    datasets: [{
      label: 'Minha Orientação Política',
      data: listaValoresPolos, // Substitua com seus dados reais
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  var options = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5, // Substitua com o valor máximo da escala
        stepSize: 1
      }
    }
  };

  // Criação do gráfico de radar
  var ctx = document.getElementById('radarChart').getContext('2d');
  var radarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
  });
  receberResultadoQuestionario()
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
  else if (score <= 50) {
    posicionamento = "Direita";
  } else {
    posicionamento = "Extrema Direita";
  }
  console.log(posicionamento, usuario.email, usuario.senha);

  funcaofetch(posicionamento);

  return posicionamento;
}

function funcaofetch(posicionamento) {
  console.log("Estou antes da fetch!");
  console.log("valores:", posicionamento);
  console.log(sessionStorage.getItem("ID_USUARIO"))

  fetch("/questionario/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      resultado: posicionamento,
      idUsuario: Number(sessionStorage.getItem("ID_USUARIO")),
    })
  }).then(function (resposta) {
    console.log("resposta: ", resposta);
    if (resposta.ok) {
      alert('Resultado computado com sucesso.')
    } else {
      alert("Houve um erro ao computar seu resultado.");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  // return false;
}

// function calcularGraficoRadar(){




// }

function receberResultadoQuestionario() {
  var ctx = document.getElementById('chart').getContext('2d');
  fetch('/questionario/puxarResultados', { cache: 'no-store' })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
      if (resposta.ok) {
        resposta.json().then(function (response) {
          console.log(response)
          setTimeout(
            () => {
              var dados = [];
              var labels = [];

              for (i = 0; i < response.length; i++) {
                var registro = response[i];
                labels.push(registro.resultado);
                dados.push(registro.qtdVotos);
              }

              var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: labels,
                  datasets: [{
                    label: 'Orientação Política dos Usuários',
                    data: dados,
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

            }, 200
          )

        })
        alert('Resultado computado com sucesso.')
      } else {
        alert("Houve um erro ao computar seu resultado.");
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}
