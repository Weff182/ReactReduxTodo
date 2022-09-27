import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../../store/slices/todoSlice';
import Button from '../button';
import {
  ModelWrapper, ModelContainer, CloseButton, ModelForm, FormTitle, ButtonContainer,
} from './styled';

function TodoModel({
  type, modelOpen, setModelOpen, todo,
}) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo && type === 'update') {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modelOpen]);

  const handleChangeState = () => {
    setModelOpen(false);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          }),
        );
        toast.success('Task Added Successfully');
        setModelOpen(false);
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            }),
          );
          toast.success('Task Updated Successfully');
          setModelOpen(false);
        } else {
          toast.error('No changes made');
        }
      }
    } else {
      toast.error('Title should dont be empty');
    }
  };

  return (
    modelOpen && (
      <ModelWrapper>
        <ModelContainer>
          <CloseButton
            onClick={handleChangeState}
            onKeyDown={handleChangeState}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </CloseButton>
          <ModelForm onSubmit={handelSubmit}>
            <FormTitle>
              {type === 'update' ? 'Update' : 'Add'}
              {' '}
              Task
            </FormTitle>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleChangeTitle}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={handleChangeStatus}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <ButtonContainer>
              <Button type="submit" variant="primary">
                {type === 'update' ? 'Update' : 'Add'}
                {' '}
                Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleChangeState}
                onKeyDown={handleChangeState}
              >
                Cancel
              </Button>
            </ButtonContainer>
          </ModelForm>
        </ModelContainer>
      </ModelWrapper>
    )
  );
}

export default TodoModel;
