const paragrafos = document.querySelectorAll("p")

let textoCompleto = ''

paragrafos.forEach( p => {
    textoCompleto += p.textContent
})

const caracteres = textoCompleto.length

console.log(caracteres)