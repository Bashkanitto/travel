let email = document.querySelector('.email').innerHTML
let pas = document.querySelector('pas')
let label = document.querySelector('label')

function joinn(){
    nex()
    alert("You joined success");

}
function nex(){
    document.location.href = 'https://qna.habr.com/q/946851'
    setTimeout(_=>derive(), 3)
}