/* tslint:disable */
import { DownloadablePhysicalEvidence } from './downloadable-physical-evidence';
export interface DownloadableLogicalEvidence {
  concept?: string;
  physicalEvidences?: Array<DownloadablePhysicalEvidence>;
}
