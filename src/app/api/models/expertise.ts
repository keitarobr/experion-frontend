/* tslint:disable */
import { ExpertiseBuilder } from './expertise-builder';
import { LogicalEvidence } from './logical-evidence';
import { Expert } from './expert';
export interface Expertise {
  builder?: ExpertiseBuilder;
  description?: string;
  evidences?: Array<LogicalEvidence>;
  expert?: Expert;
  id?: number;
  language?: string;
}
