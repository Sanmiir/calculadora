let numeroAtual = "";
let numeroAnterior = "";
let operador = "";

function exibirNaTela(x){
    if(numeroAtual === "" || numeroAtual === "0"){
        numeroAtual = String(x);
    } else{
        numeroAtual+=String(x);
    }
    document.getElementById("numeroExibido").innerText = numeroAtual;

}
function limparTela(){
    document.getElementById("numeroExibido").innerText = "0";
    numeroAtual = "";
    operador = "";
    numeroAnterior = "";
}
function armazenarOperador(op){
    if(numeroAtual === "")
        return;
    operador = op;
    numeroAnterior = numeroAtual;
    numeroAtual = "";

}

function calcularResultado(){
    if(numeroAnterior === "" || numeroAtual === "")
        return;

    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroAtual);

    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if(num2 === 0)
                resultado = 0;
            else
                resultado = num1 / num2;
            break;
        case "**":
            resultado = num1 ** num2;
            break;
        default:
            return;    
    }
    document.getElementById("numeroExibido").innerText = resultado;
    numeroAnterior = "";
    numeroAtual = String(resultado);
}

