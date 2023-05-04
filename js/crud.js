document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
})

function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    tarefas.forEach(tarefa => 
        document.querySelector("#tarefas").innerHTML += criarCard(tarefa))
}

function cadastrar() {
    const suplemento = document.querySelector("#suplemento").value
    const quantidade = document.querySelector("#quantidade").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = { 
        suplemento,
        quantidade,
        categoria
    }

    if (!isValid(tarefa.suplemento, document.querySelector("#suplemento"))) return
    if (!isValid(tarefa.quantidade, document.querySelector("#quantidade"))) return

    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    atualizar()
    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(tarefa) {
    const card = `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${tarefa.suplemento}
            </div>
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${tarefa.quantidade}pt</span>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success" title="marcar como concluída">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div> <!-- card footer -->
        </div> <!-- card -->
    </div> <!-- col -->
    ` 
    return card
}