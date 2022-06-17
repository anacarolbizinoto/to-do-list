window.addEventListener('load', () => {
	const form = document.querySelector("#nova-tarefa");
	const input = document.querySelector("#nova-tarefa-input");
	const list_el = document.querySelector("#tarefas");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('tarefa');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('conteudo');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('texto');
		task_input_el.type = 'texto';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('funcoes');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('editar');
		task_edit_el.innerText = 'Editar';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('deletar');
		task_delete_el.innerText = 'Deletar';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "editar") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Editar";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});