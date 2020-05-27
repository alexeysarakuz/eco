const questionBlocks = document.querySelectorAll('.faq__content-block-header');

questionBlocks.forEach(element => element.addEventListener('click', () => showAnswer(event)));

function showAnswer(event) {
    questionBlocks.forEach(element => {
        if (element != event.target.parentNode)
            element.parentNode.classList.remove('active')
    });
    event.target.parentNode.parentNode.classList.toggle('active');
}