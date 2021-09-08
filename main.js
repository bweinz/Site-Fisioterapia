//DOM = Document Object Model


/* Abre e fecha o menu quando clicar no icone  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//Para cada toggle ele vai criar uma constante element
for(const element of toggle){
element.addEventListener('click', function(){
    nav.classList.toggle('show')
})
}
//Se tiver o show na lista de class tira, quando executar uma função, a função será executada quando der um click, em quem? no elemento, o elemento é o 3 traços e depois o X

/*quando clicar em um item do menu, esconder o menu. */
const links = document.querySelectorAll('nav ul li a') 
//pesquisar por todos os seletores no A, atribua eles ao links

for (const link of links) {
    link.addEventListener('click' function () {
        nav.classList.remove('show')
    })
}