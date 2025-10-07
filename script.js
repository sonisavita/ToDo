let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1]
    console.log(ctr);
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);

function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    ctr = 1;
    setInterval(1000)
    ctr = ctr + 1;
    console.log(value);
}

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}