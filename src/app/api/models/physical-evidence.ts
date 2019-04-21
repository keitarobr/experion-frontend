/* tslint:disable */
import { Expert } from './expert';
import { EvidenceSourceInput } from './evidence-source-input';
import { EvidenceSourceURL } from './evidence-source-url';
export interface PhysicalEvidence {
  collectedDateTime?: string;
  expert?: Expert;
  id?: number;
  input?: EvidenceSourceInput;
  keywords?: Array<string>;
  language?: string;
  timestamp?: string;
  url?: EvidenceSourceURL;
}
