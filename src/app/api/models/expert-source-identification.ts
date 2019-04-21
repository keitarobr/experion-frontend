/* tslint:disable */
import { Expert } from './expert';
import { EvidenceSource } from './evidence-source';
export interface ExpertSourceIdentification {
  expert?: Expert;
  id?: number;
  identification?: string;
  source?: EvidenceSource;
}
