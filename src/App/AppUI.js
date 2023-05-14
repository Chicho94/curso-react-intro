import { Fragment, useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/TodoForm";

function AppUI() {
  const { loading, error, searchTodos, changeTodoState, onDelete, openModal, setOpenModal } =
    useContext(TodoContext);
    console.log(openModal);
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && [1, 2, 3].map((item) => <TodosLoading key={item}/>)}
        {error && <TodosError />}
        {!loading && searchTodos.length < 1 && <TodosEmpty />}

        {searchTodos.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onChangeState={() => changeTodoState(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </TodoList>

      <CreateTodoButton onClick={() => setOpenModal(!openModal)}/>
      {openModal && <Modal><TodoForm/></Modal>}
    </Fragment>
  );
}

export { AppUI };
