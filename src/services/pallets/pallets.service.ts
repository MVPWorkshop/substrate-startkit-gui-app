import RestService from '../rest/rest.service';
import { EPalletCategories, EPallets } from '../../shared/types/pallets.types';
import { IPalletResponse } from './palletsService.types';

class PalletsService extends RestService {
  public static async getPallet(palletName: EPallets): Promise<IPalletResponse> {
    return this.get<IPalletResponse>({
      url: `/pallets/${palletName}`
    })
  }

  public static async getPalletList(category?: EPalletCategories): Promise<IPalletResponse[]> {
    return this.get<IPalletResponse[]>({
      url: '/pallets',
      config: {
        params: {
          category
        }
      }
    });
  }
}

export default PalletsService;
