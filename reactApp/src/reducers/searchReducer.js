import { types } from '../types/types';

export const searchReducer = (state = [], action) => {

  switch (action.type) {
    case types.sendSearch:
      const currentFormIdx = state.findIndex(x => x.formId === action?.payload?.formId);

      if (currentFormIdx !== -1) {
        const state2 = [...state];

        state2[currentFormIdx].search = action.payload.inputValue
        
        return state2;
      } else {
        return [
          ...state,
          {
            formId: action.payload.formId,
            search: action.payload.inputValue
          }
        ];
      }
      

    case types.resetSearch:
      return []

    default:
      return state;
  }
}
