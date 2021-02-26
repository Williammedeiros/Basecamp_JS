var trafficlight = "amarelo"
var message = ""

//if (trafficlight == verde) {
// message = 'Pode passar'
//} else if (trafficlight == amarelo) {
//   message = 'Atenção cuidado'
//} else if (trafficlight == vermelho) {
//  message = 'Pare antes da faixa'
//} else {
//  message = 'Não existe nada'
//}

switch (trafficlight) {
    case 'verde':
        message = 'Pode passar está livre acesso'
        break

    case 'vermelho':
        message = 'Pare não ande'
        break

    case 'amarelo':
        message = 'Cuidado atenção!!!'
        break

    default:
        message = 'Valor não válido'
}

console.log(message)
