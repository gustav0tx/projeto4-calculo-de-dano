let perso1 = prompt('Qual o nome do primeiro personagem')
let perso2 = prompt('Qual o nome do segundo personagem')
let atk = parseInt(prompt(`Qual o poder de ataque do ${perso1}`))
let vida = parseInt(prompt(`Qual a vida do ${perso2}`))
let def = parseInt(prompt(`Quanto de defesa o ${perso2}`))
let escudo = prompt('Tem ou não tem escudo?')
if (atk > def && escudo === 'não tem') {
    atk = atk - def
    vida = vida - atk
    alert(`${perso1} atacou. ${perso2} sofreu ${atk} de dano e não possui escudo. Sua vida agora é ${vida}`)
} else if (atk > def && escudo === 'tem') {
    atk = atk - def
    atk = atk / 2
    vida = vida - atk
    alert(`${perso1} atacou. ${perso2} sofreu ${atk} de dano por possuir escudo. Sua vida agora é ${vida}`)
} else {
    alert(`${perso1} atacou. mas não afetou ${perso2}. Nenhum dano causado!`)
}



