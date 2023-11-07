import {Tarea} from "./Tarea"

type ListaTarea = {
    listaTareas: string[]
    borrarTarea: (index:number) => void //nos pasa un id que es un numero y al no devolver nada, es un void
}

export const ListaTareas = ({listaTareas, borrarTarea}: ListaTarea) => {
  return (
    <div className="taskList">
        {listaTareas.map((tarea,index) => (
            <Tarea key={index} tarea= {tarea} borrarTarea={() => borrarTarea}/>
        )
        )}
    </div>
  )
}
