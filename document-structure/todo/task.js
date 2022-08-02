const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

button.addEventListener('click', addTask);

function addTask (event){
    event.preventDefault();
    
    if (taskInput.value.length > 0 && taskInput.value.trim() !== '') {
        tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`)
        taskInput.value = '';
    };

    if(tasksList.hasChildNodes()){
        removeTask();
    }
};

function removeTask(){
    let taskRemove = document.querySelectorAll('.task__remove');
    
    taskRemove.forEach(item => item.addEventListener('click', (event) => {
    if (event.target.closest('.task')) {
        event.target.closest('.task').remove();
    }}));
}









// taskInput.addEventListener('keydown', function (ev) {
//     //ev.preventDefault();

//     if(ev.code == 'Enter' && taskInput.value !== ''){
//         tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
//         <div class="task__title">
//           ${this.value}
//         </div>
//         <a href="#" class="task__remove">&times;</a>
//       </div>`);


      

//     }
// })