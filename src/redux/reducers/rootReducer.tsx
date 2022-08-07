import { combineReducers } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import absences from './absenceReducer';
import exportList from './exportReducer';

const { routerReducer } = createReduxHistoryContext({
  history: createHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  absences,
  exportList,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
