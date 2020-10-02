import RestService from '../rest/rest.service';
import { IGeneratorRequest, IGeneratorResponse } from './generatorService.types';

class GeneratorService extends RestService {
  public static generateCode(data: IGeneratorRequest) {
    return this.post<IGeneratorResponse>({
      url: '/generator',
      data
    })
  }
}

export default GeneratorService;
