/* tslint:disable */
import { EvidenceSourceInput } from './evidence-source-input';
export interface EvidenceSource {
  comments?: string;
  id?: number;
  inputs?: Array<EvidenceSourceInput>;
  name?: string;
  url?: string;
}
