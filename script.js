const botaoMenu = document.querySelector(".btn-menu")
const menuEscondido = document.querySelector(".menu-lateral")
let PaginaInicial = alert("Parabens Você é um CORNO FUDIDO")
botaoMenu.addEventListener("click",function(){
    menuEscondido.classList.toggle("ativo");
     botaoMenu.classList.toggle("girar");
})

//AGARRANDO O BOTÃO CHAVEAMENTO

/*const btnBrasil = document.querySelector(' #time1 ')
const btnchile = document.querySelector(' #time2 ')
const vagaSemi1 = document.querySelector(' #vencedor ')

btnBrasil.addEventListener("click", function(){
    if(vagaSemi1.innerText === "?"){
        vagaSemi1.innerText = btnBrasil.innerText
        btnBrasil.classList.add("brilho-vencedor")
    }
    else{
        console.log("atencção: este jogo já foi decidido")
    }
})*/
async function carregarTimes(){
    try{
    let response = await fetch('https://api.npoint.io/5a3bfb8dc029950e90c4')
    let timesDaApi = await response.json();
    console.log("Dados recebidos:",timesDaApi);
    const tabuleiro = document.getElementById("tavuleiro-copa");
    const primeiraSemi = document.getElementById("vencedor-q1");
    timesDaApi.forEach(function(time){
        let novoBotao = document.createElement("button");
        novoBotao.innerText = time.nome;
        novoBotao.dataset.destino = time.destino;
        novoBotao.classList.add("jogo", "quartas");
        tabuleiro.insertBefore(novoBotao,primeiraSemi);
    })
    console.log("botões criados na tela!")    
    }
    catch(erro){
    console.log("Erro ao buscar os times", erro);
    }
}
function ativarMaquinaCliques(){
    const todosOsJogos = document.querySelectorAll(".jogo");
    todosOsJogos.forEach(function(botao){
        botao.addEventListener("click", function(event){
            let nomeDoTime = event.target.innerText;
            let ddDoDesino = event.target.dataset.destino;
            if(nomeDoTime === " ?" || !idDoDestino){
                return;
            }
            let espacoDestino = document.getElementById(idDoDestino);
            if(espacoDestino.innerText === " ? "||espacoDestino.innerText === "A Grande Final"){
                if(espacoDestino.innerText = "A Grande Final"){
                    espacoDestino.innerText = nomeDoTime + " CAMPEÃO! 🏆";
                } else{
                    espacoDestino.innerText = nomeDoTime;
                }
                event.target.classList.add("brilho-vencedor");
            } else{
                console.log('O juiz já apitou o dim deste confronte!')
            }
        });
    });
}
carregarTimes();