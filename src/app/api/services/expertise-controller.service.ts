/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ExpertiseBuilder } from '../models/expertise-builder';
import { DownloadeableExpertiseDescription } from '../models/downloadeable-expertise-description';
import { Expertise } from '../models/expertise';

/**
 * Expertise Controller
 */
@Injectable({
  providedIn: 'root',
})
class ExpertiseControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ExpertiseControllerService.AddExpertiseBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addExpertiseBuilderUsingPOSTResponse(params: ExpertiseControllerService.AddExpertiseBuilderUsingPOSTParams): __Observable<__StrictHttpResponse<ExpertiseBuilder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fullClassName != null) __params = __params.set('fullClassName', params.fullClassName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expertise/add-expertise-builder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExpertiseBuilder>;
      })
    );
  }
  /**
   * @param params The `ExpertiseControllerService.AddExpertiseBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addExpertiseBuilderUsingPOST(params: ExpertiseControllerService.AddExpertiseBuilderUsingPOSTParams): __Observable<ExpertiseBuilder> {
    return this.addExpertiseBuilderUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ExpertiseBuilder)
    );
  }

  /**
   * @param expertiseId expertiseId
   * @return OK
   */
  downloadExpertiseDescriptionUsingGETResponse(expertiseId?: number): __Observable<__StrictHttpResponse<DownloadeableExpertiseDescription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertiseId != null) __params = __params.set('expertiseId', expertiseId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expertise/download-description`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DownloadeableExpertiseDescription>;
      })
    );
  }
  /**
   * @param expertiseId expertiseId
   * @return OK
   */
  downloadExpertiseDescriptionUsingGET(expertiseId?: number): __Observable<DownloadeableExpertiseDescription> {
    return this.downloadExpertiseDescriptionUsingGETResponse(expertiseId).pipe(
      __map(_r => _r.body as DownloadeableExpertiseDescription)
    );
  }

  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  findAllExpertiseUsingPOSTResponse(expertIdentification?: string): __Observable<__StrictHttpResponse<Array<Expertise>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertIdentification != null) __params = __params.set('expertIdentification', expertIdentification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expertise/find-all-expertise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Expertise>>;
      })
    );
  }
  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  findAllExpertiseUsingPOST(expertIdentification?: string): __Observable<Array<Expertise>> {
    return this.findAllExpertiseUsingPOSTResponse(expertIdentification).pipe(
      __map(_r => _r.body as Array<Expertise>)
    );
  }

  /**
   * @return OK
   */
  findAllExpertiseBuilderUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ExpertiseBuilder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expertise/find-all-expertise-builders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ExpertiseBuilder>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllExpertiseBuilderUsingGET(): __Observable<Array<ExpertiseBuilder>> {
    return this.findAllExpertiseBuilderUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ExpertiseBuilder>)
    );
  }

  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  findAllExpertiseDescriptionUsingPOSTResponse(expertIdentification?: string): __Observable<__StrictHttpResponse<Array<DownloadeableExpertiseDescription>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertIdentification != null) __params = __params.set('expertIdentification', expertIdentification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expertise/find-all-expertise-description`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DownloadeableExpertiseDescription>>;
      })
    );
  }
  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  findAllExpertiseDescriptionUsingPOST(expertIdentification?: string): __Observable<Array<DownloadeableExpertiseDescription>> {
    return this.findAllExpertiseDescriptionUsingPOSTResponse(expertIdentification).pipe(
      __map(_r => _r.body as Array<DownloadeableExpertiseDescription>)
    );
  }

  /**
   * @param params The `ExpertiseControllerService.GenerateExpertiseUsingPOSTParams` containing the following parameters:
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateExpertiseUsingPOSTResponse(params: ExpertiseControllerService.GenerateExpertiseUsingPOSTParams): __Observable<__StrictHttpResponse<Array<Expertise>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    if (params.builderName != null) __params = __params.set('builderName', params.builderName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expertise/generate-expertise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Expertise>>;
      })
    );
  }
  /**
   * @param params The `ExpertiseControllerService.GenerateExpertiseUsingPOSTParams` containing the following parameters:
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateExpertiseUsingPOST(params: ExpertiseControllerService.GenerateExpertiseUsingPOSTParams): __Observable<Array<Expertise>> {
    return this.generateExpertiseUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<Expertise>)
    );
  }
}

module ExpertiseControllerService {

  /**
   * Parameters for addExpertiseBuilderUsingPOST
   */
  export interface AddExpertiseBuilderUsingPOSTParams {

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
   * Parameters for generateExpertiseUsingPOST
   */
  export interface GenerateExpertiseUsingPOSTParams {

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

export { ExpertiseControllerService }
