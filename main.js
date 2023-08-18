const btnCalc = document.querySelector(".btn-calc");
const res = document.getElementById("res");

const calculate = () => {
    let capital = document.querySelector(".capital").value;
    let fee = document.querySelector(".fee").value / 100;
    let period = document.querySelector(".period").value;

    if (capital == 0 || fee == 0 || period == 0) {
        res.innerHTML = '<p style="color: red;">Por favor preencha todos os campos</p>'
    } else {
        let equation = Number(capital) * (1 + Number(fee)) ** Number(period)
        // let operationFinal = Number(capital) + operationTaxa
        let interest = equation - capital
    
        // let equationFinal = equation.toFixed(2).toString().replace('.', ',');
        // let JurosForm = Juros.toFixed(2).toString().replace('.', ',');
        
        res.innerHTML = `<p>Seu montante foi de: R$${equation.toFixed(2).replace('.', ',')}</p> <br> <p>Os juros foram de: R$${interest.toFixed(2).toString().replace('.', ',')}</p>`
    }
}

btnCalc.addEventListener("click", calculate)