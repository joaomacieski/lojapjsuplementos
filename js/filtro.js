document.querySelector("#filtrar_whey").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    filtrar(tarefasFiltradas)
})

document.querySelector("#filtrar_creatina").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
    filtrar(tarefasFiltradas)
})