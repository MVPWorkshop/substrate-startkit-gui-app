import { ETemplatesReduxActions, TemplateReduxActions, TemplateReduxReducerState } from './templates.redux.types';
import { Reducer } from 'redux';

const initialState: TemplateReduxReducerState = {
};

const templateReduxReducer: Reducer<TemplateReduxReducerState, TemplateReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case ETemplatesReduxActions.SET_TEMPLATE: {
      return {
        ...state,
        [action.payload.templateId]: {
          ...action.payload.template
        }
      }
    }
    case ETemplatesReduxActions.SET_ALL_TEMPLATES: {
      const newState = {...state};

      action.payload.templates.map(template => (
        newState[template.id] = template
      ))

      return newState;
    }
    default: {
      return state;
    }
  }
}

export default templateReduxReducer;
