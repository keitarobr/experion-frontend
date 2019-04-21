/* tslint:disable */
import { ExpertSourceIdentification } from './expert-source-identification';
export interface Expert {
  dateOfBirth?: string;
  id?: number;
  identification?: string;
  identifications?: Array<ExpertSourceIdentification>;
  name?: string;
}
