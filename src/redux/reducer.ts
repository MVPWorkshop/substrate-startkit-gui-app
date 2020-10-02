import { combineReducers } from 'redux';
import LoadingReducer from './loading/loading.redux.reducer';
import PalletsReducer from './pallets/pallets.redux.reducer';
import TemplatesReducer from './templates/templates.redux.reducer';
import UiReducer from './ui/ui.redux.reducer';
import GeneratorReducer from './generator/generator.redux.reducer';

const rootReducer = combineReducers({
  loading: LoadingReducer,
  pallets: PalletsReducer,
  templates: TemplatesReducer,
  generator: GeneratorReducer,
  ui: UiReducer
});

export default rootReducer;
