// 1: Passando os itens do HTML em variáveis JS para poder trabalhar no futuro:
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*2: Ao invés de deixar as List Items no HTML, é só passar um array com os itens através do JS

EX: var todos = [
	'Fazer café',
	'Estudar Javascript', 
	'Acessar comunidade da Rocketseat'
]; */

// 9. Substituir a var todos para impregnar o método localStorage
var todos = JSON.parse(localStorage.getItem('list_todos')); 

// 3. Impregnando a mesma Array para exibição como list items:

function renderTodos() {
	listElement.innerHTML = '';
	for (todo of todos) {
	
	var todoElement = document.createElement('li');
	var todoText = document.createTextNode(todo);
	
	//(Passo 6): Criando um Link para excluir um item da lista.
	var linkElement = document.createElement('a');
	linkElement.setAttribute('href', '#');
	
	//(7): Achando a posição do array a ser excluída com indexOf
	var pos = todos.indexOf(todo);

	linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

	var linkText = document.createTextNode('Excluir');

	linkElement.appendChild(linkText);

	todoElement.appendChild(todoText);
	listElement.appendChild(linkElement);
	
	listElement.appendChild(todoElement);
	}
}

renderTodos();

// 4. Adicionar um novo 'To Do' (List Item) no input:
function addTodo() {
	var todoText = inputElement.value;
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
}
// 5. Adicionando evento ao botão
buttonElement.onclick = addTodo;	

// 7. Criando função para saber qual posição do Array deve ser excluída ao pressionar o botão.
function deleteTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

// 8. Utilizando o armazenamento local (LocalStorage) para armazenar os dados:
function saveToStorage() {

	localStorage.setItem('list_todos', JSON.stringify(todos));
							
}



