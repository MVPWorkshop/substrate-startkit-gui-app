import RestService from '../rest/rest.service';
import { ITemplateResponse } from './templatesService.types';

class TemplatesService extends RestService {
  public static async getTemplatesList() {
    return this.get<ITemplateResponse[]>({
      url: '/templates'
    })
  }
}

export default TemplatesService;
