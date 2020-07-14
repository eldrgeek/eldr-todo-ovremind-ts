import * as React from 'react';
import classNames from 'classnames';
import { useApp } from '../app';
import { Todo } from '../app/state';
import { CurrentModule } from './CurrentModule';

const TodoItem: React.FC<{
  todo: Todo;
  isEditing: boolean;
}> = ({ todo, isEditing }) => {
  const { state, actions } = useApp();
  todo = todo || state.todos[Object.keys(state.todos)[0]];
  isEditing = isEditing || true;
  if (!todo) {
    return null;
  }
  return (
    //MW Added DIV so that CSS works
    <div className="todo-list">
      <li
        className={classNames({
          completed: todo.completed,
          editing: state.editingTodoId,
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => actions.toggleTodo(todo.id)}
          />
          <label onDoubleClick={() => actions.editTodo(todo.id)}>
            {todo.title}
          </label>
          <button
            className="destroy"
            onClick={() => actions.removeTodo(todo.id)}
          />
        </div>
        {isEditing ? (
          <input
            className="edit"
            value={state.editingTodoTitle}
            onBlur={() => actions.saveEditingTodoTitle()}
            onChange={event =>
              actions.changeEditingTodoTitle(event.currentTarget.value)
            }
            onKeyDown={event => {
              if (event.keyCode === 27) {
                actions.cancelEditingTodo();
              } else if (event.keyCode === 13) {
                actions.saveEditingTodoTitle();
              }
            }}
          />
        ) : null}
      </li>
    </div>
  );
};

export default TodoItem;
CurrentModule(TodoItem);
