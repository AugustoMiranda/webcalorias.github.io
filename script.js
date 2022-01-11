var capturandoAlimento = "";
var capturandoCarboidrato = "";
var capturandoProteina = "";
var capturandoGordura = "";

function capturar() {
    
    capturandoAlimento = document.getElementById('input-alimento').value;
    capturandoCarboidrato = document.getElementById('input-carboidrato').value;
    capturandoProteina = document.getElementById('input-proteina').value;
    capturandoGordura = document.getElementById('input-gordura').value;

    let carb = capturandoCarboidrato * 4;
    let prot = capturandoProteina * 4;
    let gord = capturandoGordura * 9;
    let gordTotais = carb + prot + gord;

    document.getElementById('input-resultado').innerHTML = 'Alimento: ' + capturandoAlimento + 
    '\nCarboidratos: ' + carb + '\nProteínas: ' + prot + '\nGorduras: ' + gord + '\nCalorias Total: ' +
    gordTotais;

    event.preventDefault();
    
}












