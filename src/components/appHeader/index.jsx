import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from '../button/index';
import TodoModel from '../TodoModel';
import { updateFilterStatus } from '../../slices/todoSlice';
import { HeaderWraper } from './styled';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  const handleChange = () => {
    setModelOpen(!modelOpen);
  };

  return (
    <HeaderWraper>
      <Button variant="primary" onClick={handleChange}>
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all"> ALL </option>
        <option value="incomplete"> incomplete </option>
        <option value="complete"> complete </option>
      </SelectButton>
      <TodoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </HeaderWraper>
  );
}

export default AppHeader;
