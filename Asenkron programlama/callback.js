const todos = [
    {title : "Todo 1", description: "ingilizce çalışılacak.." },
    {title : "Todo 2", description: "react kurulum tamamla.." },
    {title : "Todo 3", description: "Meyve alınacak.." }
];

let todoListEl = document.getElementById("todoList");

function todoList(){
    setTimeout(() => {
        let todoItems = ""       
        todos.forEach(item => {
            todoItems += `
            <li>
                <b>${item.title}</b>
                <p>${item.description}</p>            
            </li>`
            // console.log(todoItems);
        })
        todoListEl.innerHTML = todoItems;
    }, 1000);
}

function newTodo(todo, callback){
    setTimeout(()=>{
        todos.push(todo);
        callback();
    }, 2000);
}
newTodo({
    title : "Todo 4",
    description : "Garaj düzenlenip temizlenecek.."
}, todoList)

todoList();
console.log(todos);
