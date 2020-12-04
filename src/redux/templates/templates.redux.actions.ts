import { ITemplateResponse } from '../../services/templates/templatesService.types';
import { ETemplatesReduxActions, SetAllTemplatesAction, SetTemplateAction } from './templates.redux.types';
import { Thunk } from '../redux.types';
import ActionUtil from '../../shared/utils/action.util';
import TemplatesService from '../../services/templates/templates.service';

export function setTemplate(templateId: string, template: ITemplateResponse): SetTemplateAction {
  return {
    type: ETemplatesReduxActions.SET_TEMPLATE,
    payload: {
      templateId,
      template
    }
  }
}

export function setAllTemplates(templates: ITemplateResponse[]): SetAllTemplatesAction {
  return {
    type: ETemplatesReduxActions.SET_ALL_TEMPLATES,
    payload: {
      templates
    }
  }
}

export function fetchAllTemplates(): Thunk<Promise<void>> {
  return async dispatch => {
    try {
      dispatch(ActionUtil.requestAction(ETemplatesReduxActions.FETCH_ALL_TEMPLATES));

      const templates = await TemplatesService.getTemplatesList();

      dispatch(ActionUtil.successAction(ETemplatesReduxActions.FETCH_ALL_TEMPLATES));
      dispatch(setAllTemplates(templates));
    } catch (error) {
      dispatch(ActionUtil.errorAction(ETemplatesReduxActions.FETCH_ALL_TEMPLATES));
    }
  }
}
