import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteTodo, updateTodo } from '../../store/slices/todoSlice';
import TodoModel from '../todoModel/index';
import CheckButton from '../checkButton/index';
import {
  TodoItemWrapper, TodoItemDetalis, TextWrapper, TextItem, Time, TodoActions, Icon,
} from './styled';

function TodoItem({ todo }) {
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    toast.success('TODO deleted successfully');
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    setUpdateModelOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete',
      }),
    );
  };
  return (
    <>
      <TodoItemWrapper>
        <TodoItemDetalis>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <TextWrapper>
            <TextItem
              status={todo.status === 'complete' ? 'complete' : 'incomplete'}
            >
              {todo.title}
            </TextItem>
            <Time>
              {todo.time}
            </Time>
          </TextWrapper>
        </TodoItemDetalis>
        <TodoActions>
          <Icon
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </Icon>
          <Icon
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </Icon>
        </TodoActions>
      </TodoItemWrapper>
      <TodoModel
        todo={todo}
        type="update"
        modelOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default TodoItem;
