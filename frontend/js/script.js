const addForm = document.querySelector('.addForm');
const tbody = document.querySelector('tbody');
const inputRecord = document.querySelector('.input-record')
const dateRecord = document.querySelector('.date-record')

const createElemento = (tag, innerText='', innerHtml='') => {
    const elemento = document.createElement(tag);

    if (innerText) {
        elemento.innerText = innerText;
    }

    if (innerHtml) {
        elemento.innerHtml = innerHtml;
    }

    return elemento;
}

const createLinha = (record) => {
    const { _id, nome, data } = record;
    const tr = createElemento('tr');
    const tdNome = createElemento('td', nome);
    const tdData = createElemento('td', data);
    const tdAcao = createElemento('td');

    const botaoDeletar = createElemento('button', 'deletar', '<span class="material-symbol-outlined"></span>')
    botaoDeletar.classList.add('botao_deletar');
    
    tr.appendChild(tdNome);
    tr.appendChild(tdData);
    tr.appendChild(tdAcao);
    
    tdAcao.appendChild(botaoDeletar);
    return tr;
}


const fetchRecords = async () => {
    const resposta = await fetch('http://localhost:5050/record/')
    const records = await resposta.json()

    return records
}

const addRecords = async (event) => {
    event.preventDefault();

    const record = {nome: inputRecord.value, data: dateRecord.value };

    await fetch ("http://localhost:5050/record/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record),
    });

    inputRecord.value = '';
    dateRecord.value = '';
    loadRecords();
}

const loadRecords = async () => {
    const records = await fetchRecords();

    tbody.innerHTML = '';

    records.forEach((record) => {
        const tr = createLinha(record);
        tbody.appendChild(tr);
        
    });
}

addForm.addEventListener('submit', addRecords)

loadRecords();