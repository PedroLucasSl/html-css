const $primario = document.querrySelector('.primario')

const  $secundario = document.querrySelector('.secundario')

$primario.addEventListener('click', function(event) {
    this.classList.toggle('conteudo_isActive')
    $secundario.classList.add('conteudo_isActive')
})

$secundario.addEventListener('click', function(event) {
    this.classList.toogle('conteudo_isActive')
    $primario.classList.add('conteudo_isActive')
})