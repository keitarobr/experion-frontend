/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EvidenceSourceInput } from '../models/evidence-source-input';
import { Expert } from '../models/expert';
import { PhysicalEvidence } from '../models/physical-evidence';

/**
 * Input Controller
 */
@Injectable({
  providedIn: 'root',
})
class InputControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `InputControllerService.AddUsingPOST1Params` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `name`: name
   *
   * - `engineName`: engineName
   *
   * @return OK
   */
  addUsingPOST1Response(params: InputControllerService.AddUsingPOST1Params): __Observable<__StrictHttpResponse<EvidenceSourceInput>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sourceName != null) __params = __params.set('sourceName', params.sourceName.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.engineName != null) __params = __params.set('engineName', params.engineName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/input/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EvidenceSourceInput>;
      })
    );
  }
  /**
   * @param params The `InputControllerService.AddUsingPOST1Params` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `name`: name
   *
   * - `engineName`: engineName
   *
   * @return OK
   */
  addUsingPOST1(params: InputControllerService.AddUsingPOST1Params): __Observable<EvidenceSourceInput> {
    return this.addUsingPOST1Response(params).pipe(
      __map(_r => _r.body as EvidenceSourceInput)
    );
  }

  /**
   * @param params The `InputControllerService.AddMultipleUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `name`: name
   *
   * - `engineNames`: engineNames
   *
   * @return OK
   */
  addMultipleUsingPOSTResponse(params: InputControllerService.AddMultipleUsingPOSTParams): __Observable<__StrictHttpResponse<Array<EvidenceSourceInput>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sourceName != null) __params = __params.set('sourceName', params.sourceName.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.engineNames != null) __params = __params.set('engineNames', params.engineNames.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/input/add-multiple`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EvidenceSourceInput>>;
      })
    );
  }
  /**
   * @param params The `InputControllerService.AddMultipleUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `name`: name
   *
   * - `engineNames`: engineNames
   *
   * @return OK
   */
  addMultipleUsingPOST(params: InputControllerService.AddMultipleUsingPOSTParams): __Observable<Array<EvidenceSourceInput>> {
    return this.addMultipleUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<EvidenceSourceInput>)
    );
  }

  /**
   * @param name name
   * @return OK
   */
  deleteByNameUsingDELETEResponse(name?: string): __Observable<__StrictHttpResponse<EvidenceSourceInput>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/input/delete-by-name`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EvidenceSourceInput>;
      })
    );
  }
  /**
   * @param name name
   * @return OK
   */
  deleteByNameUsingDELETE(name?: string): __Observable<EvidenceSourceInput> {
    return this.deleteByNameUsingDELETEResponse(name).pipe(
      __map(_r => _r.body as EvidenceSourceInput)
    );
  }

  /**
   * @return OK
   */
  findAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<EvidenceSourceInput>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/input/find-all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EvidenceSourceInput>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET1(): __Observable<Array<EvidenceSourceInput>> {
    return this.findAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<EvidenceSourceInput>)
    );
  }

  /**
   * @param name name
   * @return OK
   */
  findByNameContainingUsingGET1Response(name?: string): __Observable<__StrictHttpResponse<Array<EvidenceSourceInput>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/input/find-by-name-containing`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EvidenceSourceInput>>;
      })
    );
  }
  /**
   * @param name name
   * @return OK
   */
  findByNameContainingUsingGET1(name?: string): __Observable<Array<EvidenceSourceInput>> {
    return this.findByNameContainingUsingGET1Response(name).pipe(
      __map(_r => _r.body as Array<EvidenceSourceInput>)
    );
  }

  /**
   * @param params The `InputControllerService.FindExpertByNameUsingGETParams` containing the following parameters:
   *
   * - `inputName`: inputName
   *
   * - `expertName`: expertName
   *
   * @return OK
   */
  findExpertByNameUsingGETResponse(params: InputControllerService.FindExpertByNameUsingGETParams): __Observable<__StrictHttpResponse<Array<Expert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.inputName != null) __params = __params.set('inputName', params.inputName.toString());
    if (params.expertName != null) __params = __params.set('expertName', params.expertName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/input/find-expert-by-name`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Expert>>;
      })
    );
  }
  /**
   * @param params The `InputControllerService.FindExpertByNameUsingGETParams` containing the following parameters:
   *
   * - `inputName`: inputName
   *
   * - `expertName`: expertName
   *
   * @return OK
   */
  findExpertByNameUsingGET(params: InputControllerService.FindExpertByNameUsingGETParams): __Observable<Array<Expert>> {
    return this.findExpertByNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Expert>)
    );
  }

  /**
   * @param params The `InputControllerService.GetEvidencesUsingGETParams` containing the following parameters:
   *
   * - `language`: language
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  getEvidencesUsingGETResponse(params: InputControllerService.GetEvidencesUsingGETParams): __Observable<__StrictHttpResponse<Array<PhysicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    if (params.inputName != null) __params = __params.set('inputName', params.inputName.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/input/get-evidences`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PhysicalEvidence>>;
      })
    );
  }
  /**
   * @param params The `InputControllerService.GetEvidencesUsingGETParams` containing the following parameters:
   *
   * - `language`: language
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  getEvidencesUsingGET(params: InputControllerService.GetEvidencesUsingGETParams): __Observable<Array<PhysicalEvidence>> {
    return this.getEvidencesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PhysicalEvidence>)
    );
  }
}

module InputControllerService {

  /**
   * Parameters for addUsingPOST1
   */
  export interface AddUsingPOST1Params {

    /**
     * sourceName
     */
    sourceName?: string;

    /**
     * name
     */
    name?: string;

    /**
     * engineName
     */
    engineName?: string;
  }

  /**
   * Parameters for addMultipleUsingPOST
   */
  export interface AddMultipleUsingPOSTParams {

    /**
     * sourceName
     */
    sourceName?: string;

    /**
     * name
     */
    name?: string;

    /**
     * engineNames
     */
    engineNames?: string;
  }

  /**
   * Parameters for findExpertByNameUsingGET
   */
  export interface FindExpertByNameUsingGETParams {

    /**
     * inputName
     */
    inputName?: string;

    /**
     * expertName
     */
    expertName?: string;
  }

  /**
   * Parameters for getEvidencesUsingGET
   */
  export interface GetEvidencesUsingGETParams {

    /**
     * language
     */
    language?: string;

    /**
     * inputName
     */
    inputName?: string;

    /**
     * expertIdentification
     */
    expertIdentification?: string;
  }
}

export { InputControllerService }
