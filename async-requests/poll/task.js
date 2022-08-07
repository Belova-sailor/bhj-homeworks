const requestURL = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';

xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
        const pollTitle = document.querySelector('.poll__title');
        const pollAnswers = document.querySelector('.poll__answers');
        const answers = xhr.response.data.answers

        pollTitle.textContent = xhr.response.data.title;

        answers.forEach(element => {
            pollAnswers.insertAdjacentHTML("afterend", `<button class="poll__answer">
            ${element}
          </button>`);
        });

        const buttons = Array.from(document.querySelectorAll('.poll__answer'));
        buttons.forEach(item => item.addEventListener('click', (event) => alert('Спасибо, ваш голос засчитан!')))
    }
}

xhr.send();

