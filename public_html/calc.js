/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcIMC() {
    var peso  = document.getElementById("peso").value;
    var altura  = document.getElementById("alt").value;
    var aux = peso/Math.pow(altura, 2);
    document.getElementById("res").value = aux.toFixed(2);
    
    if(isNaN(aux)){
        var msg = new SpeechSynthesisUtterance("O resultado não pode ser calculado");
        window.speechSynthesis.speak(msg);
    }else{
        var msg = new SpeechSynthesisUtterance("O seu IMC é:"+aux.toFixed(2));
        window.speechSynthesis.speak(msg);
        if(aux < 18.5){
            var msg = new SpeechSynthesisUtterance("Abaixo do peso.");
            window.speechSynthesis.speak(msg);
        }else if(aux > 18.6 && aux <24.9){
            var msg = new SpeechSynthesisUtterance("Peso ideal, parabéns!");
            window.speechSynthesis.speak(msg);
        }else if(aux >25.0 && aux < 29.9){
            var msg = new SpeechSynthesisUtterance("Levemente acima do peso.");
            window.speechSynthesis.speak(msg);
        }else if(aux > 30.0 && aux < 34.9){
            var msg = new SpeechSynthesisUtterance("Obesidade GRAU 1.");
            window.speechSynthesis.speak(msg);
        }else if(aux > 35.0 && aux < 39.9){
            var msg = new SpeechSynthesisUtterance("Obesidade GRAU 2. Severa");
            window.speechSynthesis.speak(msg);
        }else if(aux > 40.0){
            var msg = new SpeechSynthesisUtterance("Obesidade GRAU 3, Mórbida.");
            window.speechSynthesis.speak(msg);
        }
    }
}