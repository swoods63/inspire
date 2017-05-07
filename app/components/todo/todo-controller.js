function TodoController() {
    // new up the TodoService that has already been configured for your use
    // There are two methods getTodos returns and array
    // saveTodos accepts an array and stores it to your local storage
    var todoService = new TodoService()


    this.addTodoFromForm = function (event) {

        var task = document.getElementById("task");


        // TAKE THE INFORMATION FORM THE FORM

        //ADD IT TO THE ARRAY BELOW
        var todosArry = todoService.getTodos()

        todosArry.push(task.value);


        // FINAL ACTION OF ADDING A TODO
        todoService.saveTodos(todosArry)
    }
    function remove() {
        var id = this.getAttribute('id');
        var todos = todoService.getTodos();
        todos.splice(id, 1);
        todoService.saveTodos(todos);

        show();

        return false;
    }
    function show() {
        var todos = todoService.getTodos();

        var html = '<ul>';
        for (var i = 0; i < todos.length; i++) {
            html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
        };
        html += '</ul>';

        document.getElementById('todos').innerHTML = html;

        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };
    }
    show();
}

//  todoForm.submit(function(e){
//     e.preventDefault();
//     console.log(e);
// })
// function TodoController() {
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str); 
//     }
//     return todos;
// }
// function add() {
//     var task = document.getElementById('task').value;

//     var todos = get_todos();
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));

//     show();

//     return false;
// }

// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));

//     show();

//     return false;
// }

// function show() {
//     var todos = get_todos();

//     var html = '<ul>';
//     for(var i=0; i<todos.length; i++) {
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//     };
//     html += '</ul>';

//     document.getElementById('todos').innerHTML = html;

//     var buttons = document.getElementsByClassName('remove');
//     for (var i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', remove);
//     };
// }

// document.getElementById('add').addEventListener('click', add);
// show();