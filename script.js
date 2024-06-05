/* Seleciona todos os elementos com a classe x */
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        
        const para = question.nextElementSibling
        para.classList.toggle('hidden')

        const plus = question.querySelector('.plus')
        const minus = question.querySelector('.minus')
        plus.classList.toggle('hidden')
        minus.classList.toggle('hidden')
    })
})
