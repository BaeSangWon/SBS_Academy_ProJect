$('.box1 span').text('흐림')

let day = "목"
$('.box2 span').text(day)

let p31 = $('.p31').text()
$('.box3 .p32').text(p31)

let userName = $('.box4 .p41').text()
$('.box4 .p42').html(`<strong>${userName}</strong>님 환영합니다`)

// text() = textContent(), innerText()
// html() = innerHTML()