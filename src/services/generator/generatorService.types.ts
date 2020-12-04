import { EPallets } from '../../shared/types/pallets.types';

export interface IGeneratorRequest {
  pallets: EPallets[];
}

export interface IGeneratorResponse {
  repository: string;
}
