window.addEventListener('load', () => {
	const novaTarefa = document.querySelector("#nova-tarefa");
	const input = document.querySelector("#nova-tarefa-input");
	const elementosDaLista = document.querySelector("#tarefas");

	novaTarefa.addEventListener('submit', (e) => {
		e.preventDefault();


		const tarefa = input.value;

		const divhtml = document.createElement('div');
		divhtml.classList.add('tarefa');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('conteudo');

		divhtml.appendChild(task_content_el); 

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('texto');
		task_input_el.type = 'texto';
		task_input_el.value = tarefa;
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

		divhtml.appendChild(task_actions_el);

		elementosDaLista.appendChild(divhtml);

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
			elementosDaLista.removeChild(divhtml);
		});
	});
});