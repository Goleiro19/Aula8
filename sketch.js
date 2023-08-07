//código de alerta confirm e prompt simples
//window.alert('Meu primeiro Alerta')//cria alerta
//window.confirm('Está gostando do curso')//confirmação
//window.prompt('Qual o seu nome?')//caixa de pergunta (não aparece na tela pois não está progamado)

//variáveis e concatenação
//var nome = window.prompt('Qual o seu nome?')// var guarda o nome
//window.alert('Seja bem vindo ' + nome + '!') //concatenação da var com uma string

//criando 2 números
var n1 = window.prompt('Digite um número')
var n2 = window.prompt('Digite outro número')
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)

// tratamento de dados 

//prompet por padrão retorna uma string
// + pode ser concatenação ou adição, o computador não diferencia, por esse 
// (string + string retorna em string)
// (number + number retorna número)

//existem 2 tipos de números: Inteiro (Number.parseInt) e float (Number.parsefloat)
//float são números flutuantes , vem depois da vírgula
//testar com números flutuantes 
var n1 = Number.parseInt(window.prompt('Digite um número'))
var n2 = Number.parseInt(window.prompt('Digite outro número'))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)

//números flutuantes
//var n1 = Number.parseFloat(window.prompt('Digite um número'))
//var n2 = Number.parseFloat(window.prompt('Digite outro número'))
//var s = n1 + n2
//var s = window.alert('A soma dos 2 números é ' + s)

//JavaScript decide se é inteiro ou flutuante
var n1 = Number(window.prompt('Digite um número'))
var n2 = Number(window.prompt('Digite outro número'))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)