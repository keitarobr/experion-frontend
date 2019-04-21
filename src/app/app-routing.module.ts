import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpertAddComponent} from './expert/expert-add/expert-add.component';
import {ExpertAddIdentificationComponent} from './expert/expert-add-identification/expert-add-identification.component';
import { ExpertCollectEvidencesComponent } from './expert/expert-collect-evidences/expert-collect-evidences.component';
import { ExpertGenerateLogicalEvidenceComponent } from './expert/expert-generate-logical-evidence/expert-generate-logical-evidence.component';
import { SourceFindExpertComponent } from './source/source-find-expert/source-find-expert.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ExpertGenerateExpertiseComponent } from './expertise/expert-generate-expertise/expert-generate-expertise.component';
import { ExpertGenerateProfileComponent } from './expertise/expert-generate-profile/expert-generate-profile.component';
import { ExpertiseBrowserComponent } from './expertise/expertise-browser/expertise-browser.component';

const routes: Routes = [
  {path: 'source-find-expert', component: SourceFindExpertComponent, data: {menuPath: "Source/Find experts"}, canActivate: [AuthGuard]},
  {path: 'add-expert', component: ExpertAddComponent, data: {menuPath: "Expert/Manage experts"}, canActivate: [AuthGuard]},
  {path: 'add-expert-identification', component: ExpertAddIdentificationComponent, data: {menuPath: "Expert/Manage expert identifications"}, canActivate: [AuthGuard]},
  {path: 'collect-expert-evidences', component: ExpertCollectEvidencesComponent, data: {menuPath: "Expert/Collect evidences"}, canActivate: [AuthGuard]},
  {path: 'generate-expert-logical-evidences', component: ExpertGenerateLogicalEvidenceComponent, data: {menuPath: "Expert/Generate logical evidences"}, canActivate: [AuthGuard]},
  {path: 'generate-expert-expertise', component: ExpertGenerateExpertiseComponent, data: {menuPath: "Expert/Generate expertise"}, canActivate: [AuthGuard]},
  {path: 'generate-expert-profile', component: ExpertGenerateProfileComponent, data: {menuPath: "Expert/Build profiles"}, canActivate: [AuthGuard]},
  {path: 'expertise-browser', component: ExpertiseBrowserComponent, data: {menuPath: "Expert/Browse expertise"}, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
