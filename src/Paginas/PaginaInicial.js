import React, { useState } from "react";
import "./PaginaInicial.css";

export default function PaginaInicial() {

    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefa, setTarefa] = useState("");

    function adicionarNovaTarefa() {
        if (tarefa.trim() !== "") {
            setListaTarefas([...listaTarefas, { texto: tarefa, concluida: false }]);
            setTarefa("");
        }
    }

    function deletarTarefa(index) {
        const tempLista = [...listaTarefas];
        tempLista.splice(index, 1);
        setListaTarefas(tempLista);
    }

    function alternarConclusao(index) {
        const novasTarefas = [...listaTarefas];
        novasTarefas[index].concluida = !novasTarefas[index].concluida;
        setListaTarefas(novasTarefas);
    }

    return (
        <>
            <div className="container">
                <h1>Lista de Tarefas</h1>
                <input
                    value={tarefa}
                    onChange={(value) => setTarefa(value.target.value)}
                    type="text"
                    placeholder="Digite sua tarefa" // Mensagem de placeholder
                />
                <button className="botaoAdicionar" onClick={adicionarNovaTarefa}>
                    Nova Tarefa
                </button>
                <ul className="lista">
                    {listaTarefas.map((item, index) => (
                        <li className="tarefa" key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={item.concluida}
                                    onChange={() => alternarConclusao(index)}
                                    disabled={item.concluida}
                                />
                            </label>
                            <span>{item.texto}</span>
                            <button onClick={() => deletarTarefa(index)}>Deletar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
    
}
