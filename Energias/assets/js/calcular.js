function calcular(event) {
    event.preventDefault();

    var valorUsuario = parseFloat(document.getElementById("valor").value);

    const estados = {
        "SP" : 0.656,
        "RJ" : 0.754,
        "MS" : 0.653,
        "PR" : 0.570,
        "MT" : 0.802,
        "RN" : 0.662,
        "AC" : 0.733
    };

    var valorEnergia = estados[estadoSelecionado = document.getElementById("estado").value];
    var consumoMensal = valorUsuario / valorEnergia;
    var co2DaCasa = valorUsuario * 0.9;

    const co2Capturado = 0.35;

    var quantidadeDeArvore = co2DaCasa / co2Capturado;

    var stringLiteral = `
        Consumo mensal em R$: ${consumoMensal.toFixed(2)}
        Co2 gerado: ${co2DaCasa.toFixed(2)}
    `
    
    if (isNaN(valorUsuario)) {
        document.getElementById("resultado").innerText = "Digite valores válidos.";
    } else {
        document.getElementById("resultado").innerText = stringLiteral;
        document.getElementById("arvores").innerText = quantidadeDeArvore.toFixed(2);
    }
    
}