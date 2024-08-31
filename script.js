let char1 = 'john'
let char2 = 'wick'
let atk = 10
let health = 10
let def = 6
let shield = false
if (atk > def && shield == false ) {
    atk = atk - def
    health = health - atk
    console.log(`${char1} atacou. ${char2} sofreu ${atk} de dano e não possui escudo. Sua vida agora é ${health}`)
} else if (atk > def && shield == true) {
    atk = atk - def
    atk = atk / 2
    health = health - atk
    console.log(`${char1} atacou. ${char2} sofreu ${atk} de dano por possuir escudo. Sua vida agora é ${health}`)
} else {
    console.log(`${char1} atacou. mas não afetou ${char2}. Nenhum dano causado!`)
}



