/* tslint:disable */
import { ProfileBuilder } from './profile-builder';
import { Expert } from './expert';
import { Expertise } from './expertise';
export interface Profile {
  builder?: ProfileBuilder;
  description?: string;
  expert?: Expert;
  expertise?: Array<Expertise>;
  id?: number;
}
