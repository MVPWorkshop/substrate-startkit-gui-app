import { ITemplateResponse } from '../../../services/templates/templatesService.types';

export interface ITemplatePreviewProps {
  template: ITemplateResponse;
  onCreateBlockchainClick: () => void;
}
