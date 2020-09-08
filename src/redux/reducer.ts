import { combineReducers } from 'redux';
import LoadingReducer from './loading/loading.redux.reducer';
import PalletsReducer from './pallets/pallets.redux.reducer';
import TemplatesReducer from './templates/templates.redux.reducer';
import UiReducer from './ui/ui.redux.reducer';

const rootReducer = combineReducers({
  loading: LoadingReducer,
  pallets: PalletsReducer,
  templates: TemplatesReducer,
  ui: UiReducer
});

export default rootReducer;
