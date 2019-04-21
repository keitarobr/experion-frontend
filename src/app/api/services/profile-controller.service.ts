/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProfileBuilder } from '../models/profile-builder';
import { Profile } from '../models/profile';

/**
 * Profile Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProfileControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ProfileControllerService.AddProfileBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addProfileBuilderUsingPOSTResponse(params: ProfileControllerService.AddProfileBuilderUsingPOSTParams): __Observable<__StrictHttpResponse<ProfileBuilder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fullClassName != null) __params = __params.set('fullClassName', params.fullClassName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/profile/add-profile-builder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileBuilder>;
      })
    );
  }
  /**
   * @param params The `ProfileControllerService.AddProfileBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addProfileBuilderUsingPOST(params: ProfileControllerService.AddProfileBuilderUsingPOSTParams): __Observable<ProfileBuilder> {
    return this.addProfileBuilderUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ProfileBuilder)
    );
  }

  /**
   * @param params The `ProfileControllerService.GenerateProfilesUsingPOSTParams` containing the following parameters:
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateProfilesUsingPOSTResponse(params: ProfileControllerService.GenerateProfilesUsingPOSTParams): __Observable<__StrictHttpResponse<Array<Profile>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    if (params.builderName != null) __params = __params.set('builderName', params.builderName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/profile/generate-profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Profile>>;
      })
    );
  }
  /**
   * @param params The `ProfileControllerService.GenerateProfilesUsingPOSTParams` containing the following parameters:
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateProfilesUsingPOST(params: ProfileControllerService.GenerateProfilesUsingPOSTParams): __Observable<Array<Profile>> {
    return this.generateProfilesUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<Profile>)
    );
  }

  /**
   * @return OK
   */
  listProfileBuildersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ProfileBuilder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/list-profile-builders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProfileBuilder>>;
      })
    );
  }
  /**
   * @return OK
   */
  listProfileBuildersUsingGET(): __Observable<Array<ProfileBuilder>> {
    return this.listProfileBuildersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ProfileBuilder>)
    );
  }

  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listProfilesUsingGETResponse(expertIdentification?: string): __Observable<__StrictHttpResponse<Array<Profile>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertIdentification != null) __params = __params.set('expertIdentification', expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/list-profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Profile>>;
      })
    );
  }
  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listProfilesUsingGET(expertIdentification?: string): __Observable<Array<Profile>> {
    return this.listProfilesUsingGETResponse(expertIdentification).pipe(
      __map(_r => _r.body as Array<Profile>)
    );
  }
}

module ProfileControllerService {

  /**
   * Parameters for addProfileBuilderUsingPOST
   */
  export interface AddProfileBuilderUsingPOSTParams {

    /**
     * name
     */
    name?: string;

    /**
     * fullClassName
     */
    fullClassName?: string;
  }

  /**
   * Parameters for generateProfilesUsingPOST
   */
  export interface GenerateProfilesUsingPOSTParams {

    /**
     * expertIdentification
     */
    expertIdentification?: string;

    /**
     * builderName
     */
    builderName?: string;
  }
}

export { ProfileControllerService }
