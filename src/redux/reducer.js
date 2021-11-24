import {combineReducers} from 'redux';

const initialStateFutball = {
  data: {},
};

const FutballReducer = (state = initialStateFutball, action) => {
  if (action.type === 'FILL_DATA') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const initialStateBMI = {
  data: {},
};

const BMIReducer = (state = initialStateBMI, action) => {
  if (action.type === 'FILL_BMI') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  FutballReducer,
  BMIReducer,
});

export default reducer;
