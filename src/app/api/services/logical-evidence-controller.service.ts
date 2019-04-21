/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LogicalEvidenceBuilder } from '../models/logical-evidence-builder';
import { LogicalEvidence } from '../models/logical-evidence';

/**
 * Logical Evidence Controller
 */
@Injectable({
  providedIn: 'root',
})
class LogicalEvidenceControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `LogicalEvidenceControllerService.AddLogicalEvidenceBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addLogicalEvidenceBuilderUsingPOSTResponse(params: LogicalEvidenceControllerService.AddLogicalEvidenceBuilderUsingPOSTParams): __Observable<__StrictHttpResponse<LogicalEvidenceBuilder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fullClassName != null) __params = __params.set('fullClassName', params.fullClassName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/logical-evidence/add-logical-evidence-builder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LogicalEvidenceBuilder>;
      })
    );
  }
  /**
   * @param params The `LogicalEvidenceControllerService.AddLogicalEvidenceBuilderUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `fullClassName`: fullClassName
   *
   * @return OK
   */
  addLogicalEvidenceBuilderUsingPOST(params: LogicalEvidenceControllerService.AddLogicalEvidenceBuilderUsingPOSTParams): __Observable<LogicalEvidenceBuilder> {
    return this.addLogicalEvidenceBuilderUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as LogicalEvidenceBuilder)
    );
  }

  /**
   * @param params The `LogicalEvidenceControllerService.GenerateLogicalEvidencesUsingPOSTParams` containing the following parameters:
   *
   * - `languageCode`: languageCode
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateLogicalEvidencesUsingPOSTResponse(params: LogicalEvidenceControllerService.GenerateLogicalEvidencesUsingPOSTParams): __Observable<__StrictHttpResponse<Array<LogicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.languageCode != null) __params = __params.set('languageCode', params.languageCode.toString());
    if (params.inputName != null) __params = __params.set('inputName', params.inputName.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    if (params.builderName != null) __params = __params.set('builderName', params.builderName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/logical-evidence/generate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LogicalEvidence>>;
      })
    );
  }
  /**
   * @param params The `LogicalEvidenceControllerService.GenerateLogicalEvidencesUsingPOSTParams` containing the following parameters:
   *
   * - `languageCode`: languageCode
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * - `builderName`: builderName
   *
   * @return OK
   */
  generateLogicalEvidencesUsingPOST(params: LogicalEvidenceControllerService.GenerateLogicalEvidencesUsingPOSTParams): __Observable<Array<LogicalEvidence>> {
    return this.generateLogicalEvidencesUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<LogicalEvidence>)
    );
  }

  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listLogicalEvidencesUsingGETResponse(expertIdentification?: string): __Observable<__StrictHttpResponse<Array<LogicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertIdentification != null) __params = __params.set('expertIdentification', expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/logical-evidence/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LogicalEvidence>>;
      })
    );
  }
  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listLogicalEvidencesUsingGET(expertIdentification?: string): __Observable<Array<LogicalEvidence>> {
    return this.listLogicalEvidencesUsingGETResponse(expertIdentification).pipe(
      __map(_r => _r.body as Array<LogicalEvidence>)
    );
  }

  /**
   * @return OK
   */
  listLogicalEvidenceBuildersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<LogicalEvidenceBuilder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/logical-evidence/list-logical-evidence-builder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LogicalEvidenceBuilder>>;
      })
    );
  }
  /**
   * @return OK
   */
  listLogicalEvidenceBuildersUsingGET(): __Observable<Array<LogicalEvidenceBuilder>> {
    return this.listLogicalEvidenceBuildersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<LogicalEvidenceBuilder>)
    );
  }
}

module LogicalEvidenceControllerService {

  /**
   * Parameters for addLogicalEvidenceBuilderUsingPOST
   */
  export interface AddLogicalEvidenceBuilderUsingPOSTParams {

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
   * Parameters for generateLogicalEvidencesUsingPOST
   */
  export interface GenerateLogicalEvidencesUsingPOSTParams {

    /**
     * languageCode
     */
    languageCode?: string;

    /**
     * inputName
     */
    inputName?: string;

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

export { LogicalEvidenceControllerService }
