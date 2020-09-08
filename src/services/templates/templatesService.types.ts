import { EPallets } from '../../shared/types/pallets.types';

export interface ITemplateResponse {
  id: string;
  name: string;
  description: string;
  author: {
    username: string;
  };
  dependencies: EPallets[];
}
