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

const initialStateLirik = {
  data: {},
};

const LirikReducer = (state = initialStateLirik, action) => {
  if (action.type === 'FILL_LIRIK') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  FutballReducer,
  LirikReducer,
});

export default reducer;
