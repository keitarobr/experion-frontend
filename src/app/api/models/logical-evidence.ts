/* tslint:disable */
import { LogicalEvidenceBuilder } from './logical-evidence-builder';
import { Expert } from './expert';
import { Expertise } from './expertise';
import { PhysicalEvidence } from './physical-evidence';
export interface LogicalEvidence {
  builder?: LogicalEvidenceBuilder;
  concept?: string;
  expert?: Expert;
  expertise?: Array<Expertise>;
  id?: number;
  language?: string;
  physicalEvidences?: Array<PhysicalEvidence>;
}
