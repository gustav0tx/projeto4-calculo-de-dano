let perso1 = 'john'
let perso2 = 'wick'
let atk = 10
let vida = 10
let def = 6
let escudo = false
if (atk > def && escudo == false ) {
    atk = atk - def
    vida = vida - atk
    console.log(`${perso1} atacou. ${perso2} sofreu ${atk} de dano e não possui escudo. Sua vida agora é ${vida}`)
} else if (atk > def && escudo == true) {
    atk = atk - def
    atk = atk / 2
    vida = vida - atk
    console.log(`${perso1} atacou. ${perso2} sofreu ${atk} de dano por possuir escudo. Sua vida agora é ${vida}`)
} else {
    console.log(`${perso1} atacou. mas não afetou ${perso2}. Nenhum dano causado!`)
}



