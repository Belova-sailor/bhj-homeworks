const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messagesBot = [
    'Мы еще спим!',
    'Что вы так нервничаете! Это вредно!',
    'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
    'Вы не купили не одного товара, что б так с нами разговаривать!',
    'Кто тут?',
    'Мы нечего не будем вам продавать!',
    '&#128540'
];

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

chatWidgetInput.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && chatWidgetInput.value !== '') {
        messages.innerHTML += `
        <div class="message message_client ">
          <div class="message__time">${new Date().toTimeString().substring(0, 5)}</div>
          <div class="message__text">
            ${this.value}
          </div>
        </div>
      `;

        this.value = '';

        setTimeout(() => {
            let idx = Math.floor(Math.random() * (messagesBot.length));

            messages.innerHTML += `
            <div class="message">
              <div class="message__time">${new Date().toTimeString().substring(0, 5)}</div>
              <div class="message__text">
                ${messagesBot[idx]}
              </div>
            </div>
          `;
        }, 1000);
    };
})

