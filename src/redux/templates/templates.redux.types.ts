import { ReduxAction } from '../redux.types';
import { ITemplateResponse } from '../../services/templates/templatesService.types';
import { DynamicObject } from '../../shared/types/util.types';

export enum ETemplatesReduxActions {
  SET_TEMPLATE = 'SET_TEMPLATE',
  SET_ALL_TEMPLATES = 'SET_ALL_TEMPLATES',
  FETCH_TEMPLATE = 'FETCH_TEMPLATE',
  FETCH_ALL_TEMPLATES = 'FETCH_ALL_TEMPLATES'
}

export type SetTemplateAction = ReduxAction<ETemplatesReduxActions.SET_TEMPLATE, {
  templateId: string;
  template: ITemplateResponse;
}>

export type SetAllTemplatesAction = ReduxAction<ETemplatesReduxActions.SET_ALL_TEMPLATES, {
  templates: ITemplateResponse[];
}>

export type TemplateReduxActions =
  SetTemplateAction |
  SetAllTemplatesAction;

// Reducer
export type TemplateReduxReducerState = DynamicObject<ITemplateResponse>;
