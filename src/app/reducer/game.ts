/*
3rd Party library imports
 */
/*
Project file imports
 */
import { IQuestion } from '../pages/create-game/models/question';

export interface State {
  code: string;
  users: [{
    username: string,
    name: string
  }];
  time: number;
  questions: [IQuestion];
}

export const initialState: State = {
  code: null, // abc
  users: [{
    username: null,
    name: null
  }],
  time: 0,
  questions: null
};

export function reducer(state = initialState, { type, payload }): State {
  switch (type) {
    default:
      return state;
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getCode = (state: State) => state.code;

// export const getEntities = (state: State) => state.entities;
//
// export const getIds = (state: State) => state.ids;
//
// export const getSelectedId = (state: State) => state.selectedBookId;
//
// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//   return entities[selectedId];
// });
//
// export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });
