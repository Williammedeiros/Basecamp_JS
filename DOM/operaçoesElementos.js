var element = document.querySelector('div#app')

// <a href="http://google.com">Viste a página do Google</a>

var link = document.createElement('a')
var textLink = document.createTextNode('Viste a página do Google')

link.setAttribute('href', 'http://google.com')
link.appendChild(textLink)

app.appendChild(link)

//remove paragrafo na div

var text =document.querySelector('div#app p')

app.removeChild(text)