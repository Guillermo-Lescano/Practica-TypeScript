import {useState} from 'react'
import {ListaTareas} from './ListaTareas'

const TodoApp = () => {

    const [newTasck, setNewTask] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    
    const handleAddTask = () =>{
        if(newTasck.trim() === '') return
            setListaTareas(tareaAnteriores => [...tareaAnteriores, newTasck])
            setNewTask('')    
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_,i)=> i != index))
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input 
            type="text"
            value={newTasck}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Nueva tarea"
            />
            <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
    <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  )
}

export default TodoApp