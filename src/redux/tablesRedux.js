import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllTables = (statePart) => statePart.tables;
export const getTableId = ({ tables }, tableId) => {
  return tables.find((table) => table.id === tableId);
};

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLES = createActionName('EDIT_TABLES');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTables = (payload) => ({ type: EDIT_TABLES, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTablesRequest = (newTable, tableID) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };

    fetch(`${API_URL}/tables/${tableID}`, options).then(() =>
      dispatch(editTables(newTable))
    );
  };
};

export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };

    fetch(`${API_URL}/tables`, options).then(() =>
      dispatch(addTable(newTable))
    );
  };
};

export const removeTableRequest = (tableId) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
    };

    fetch(`${API_URL}/tables/${tableId}`, options).then(() =>
      dispatch(removeTable(tableId))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLES:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;
