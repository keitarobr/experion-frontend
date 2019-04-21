/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Expert } from '../models/expert';
import { PhysicalEvidence } from '../models/physical-evidence';

/**
 * Expert Controller
 */
@Injectable({
  providedIn: 'root',
})
class ExpertControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ExpertControllerService.AddUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `identification`: identification
   *
   * @return OK
   */
  addUsingPOSTResponse(params: ExpertControllerService.AddUsingPOSTParams): __Observable<__StrictHttpResponse<Expert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.identification != null) __params = __params.set('identification', params.identification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expert/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Expert>;
      })
    );
  }
  /**
   * @param params The `ExpertControllerService.AddUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `identification`: identification
   *
   * @return OK
   */
  addUsingPOST(params: ExpertControllerService.AddUsingPOSTParams): __Observable<Expert> {
    return this.addUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Expert)
    );
  }

  /**
   * @param params The `ExpertControllerService.AddExpertIdentificationUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `identification`: identification
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  addExpertIdentificationUsingPOSTResponse(params: ExpertControllerService.AddExpertIdentificationUsingPOSTParams): __Observable<__StrictHttpResponse<Expert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sourceName != null) __params = __params.set('sourceName', params.sourceName.toString());
    if (params.identification != null) __params = __params.set('identification', params.identification.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expert/add-expert-identification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Expert>;
      })
    );
  }
  /**
   * @param params The `ExpertControllerService.AddExpertIdentificationUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `identification`: identification
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  addExpertIdentificationUsingPOST(params: ExpertControllerService.AddExpertIdentificationUsingPOSTParams): __Observable<Expert> {
    return this.addExpertIdentificationUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Expert)
    );
  }

  /**
   * @param params The `ExpertControllerService.AddWithBirthdateUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `identification`: identification
   *
   * - `dateOfBirth`: dateOfBirth
   *
   * @return OK
   */
  addWithBirthdateUsingPOSTResponse(params: ExpertControllerService.AddWithBirthdateUsingPOSTParams): __Observable<__StrictHttpResponse<Expert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.identification != null) __params = __params.set('identification', params.identification.toString());
    if (params.dateOfBirth != null) __params = __params.set('dateOfBirth', params.dateOfBirth.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expert/add-with-birthdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Expert>;
      })
    );
  }
  /**
   * @param params The `ExpertControllerService.AddWithBirthdateUsingPOSTParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `identification`: identification
   *
   * - `dateOfBirth`: dateOfBirth
   *
   * @return OK
   */
  addWithBirthdateUsingPOST(params: ExpertControllerService.AddWithBirthdateUsingPOSTParams): __Observable<Expert> {
    return this.addWithBirthdateUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Expert)
    );
  }

  /**
   * @param params The `ExpertControllerService.CollectEvidencesUsingPOSTParams` containing the following parameters:
   *
   * - `language`: language
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  collectEvidencesUsingPOSTResponse(params: ExpertControllerService.CollectEvidencesUsingPOSTParams): __Observable<__StrictHttpResponse<Array<PhysicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    if (params.inputName != null) __params = __params.set('inputName', params.inputName.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expert/collect-evidences`,
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
   * @param params The `ExpertControllerService.CollectEvidencesUsingPOSTParams` containing the following parameters:
   *
   * - `language`: language
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  collectEvidencesUsingPOST(params: ExpertControllerService.CollectEvidencesUsingPOSTParams): __Observable<Array<PhysicalEvidence>> {
    return this.collectEvidencesUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<PhysicalEvidence>)
    );
  }

  /**
   * @param params The `ExpertControllerService.DeleteExpertIdentificationUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `identification`: identification
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  deleteExpertIdentificationUsingPOSTResponse(params: ExpertControllerService.DeleteExpertIdentificationUsingPOSTParams): __Observable<__StrictHttpResponse<Expert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sourceName != null) __params = __params.set('sourceName', params.sourceName.toString());
    if (params.identification != null) __params = __params.set('identification', params.identification.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/expert/delete-expert-identification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Expert>;
      })
    );
  }
  /**
   * @param params The `ExpertControllerService.DeleteExpertIdentificationUsingPOSTParams` containing the following parameters:
   *
   * - `sourceName`: sourceName
   *
   * - `identification`: identification
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  deleteExpertIdentificationUsingPOST(params: ExpertControllerService.DeleteExpertIdentificationUsingPOSTParams): __Observable<Expert> {
    return this.deleteExpertIdentificationUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Expert)
    );
  }

  /**
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Expert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/find-all`,
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
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<Expert>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Expert>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findByIdentificationContainingUsingGETResponse(id?: string): __Observable<__StrictHttpResponse<Array<Expert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/find-by-identification-containing`,
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
   * @param id id
   * @return OK
   */
  findByIdentificationContainingUsingGET(id?: string): __Observable<Array<Expert>> {
    return this.findByIdentificationContainingUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<Expert>)
    );
  }

  /**
   * @param name name
   * @return OK
   */
  findByNameContainingUsingGETResponse(name?: string): __Observable<__StrictHttpResponse<Array<Expert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/find-by-name-containing`,
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
   * @param name name
   * @return OK
   */
  findByNameContainingUsingGET(name?: string): __Observable<Array<Expert>> {
    return this.findByNameContainingUsingGETResponse(name).pipe(
      __map(_r => _r.body as Array<Expert>)
    );
  }

  /**
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listAllCollectedEvidencesUsingGETResponse(expertIdentification?: string): __Observable<__StrictHttpResponse<Array<PhysicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (expertIdentification != null) __params = __params.set('expertIdentification', expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/list-all-collected-evidences`,
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
   * @param expertIdentification expertIdentification
   * @return OK
   */
  listAllCollectedEvidencesUsingGET(expertIdentification?: string): __Observable<Array<PhysicalEvidence>> {
    return this.listAllCollectedEvidencesUsingGETResponse(expertIdentification).pipe(
      __map(_r => _r.body as Array<PhysicalEvidence>)
    );
  }

  /**
   * @param params The `ExpertControllerService.ListEvidencesUsingGETParams` containing the following parameters:
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  listEvidencesUsingGETResponse(params: ExpertControllerService.ListEvidencesUsingGETParams): __Observable<__StrictHttpResponse<Array<PhysicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.inputName != null) __params = __params.set('inputName', params.inputName.toString());
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/list-evidences`,
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
   * @param params The `ExpertControllerService.ListEvidencesUsingGETParams` containing the following parameters:
   *
   * - `inputName`: inputName
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  listEvidencesUsingGET(params: ExpertControllerService.ListEvidencesUsingGETParams): __Observable<Array<PhysicalEvidence>> {
    return this.listEvidencesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PhysicalEvidence>)
    );
  }

  /**
   * @param params The `ExpertControllerService.ListEvidencesByInputsUsingGETParams` containing the following parameters:
   *
   * - `inputNames`: inputNames
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  listEvidencesByInputsUsingGETResponse(params: ExpertControllerService.ListEvidencesByInputsUsingGETParams): __Observable<__StrictHttpResponse<Array<PhysicalEvidence>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.inputNames || []).forEach(val => {if (val != null) __params = __params.append('inputNames', val.toString())});
    if (params.expertIdentification != null) __params = __params.set('expertIdentification', params.expertIdentification.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/expert/list-evidences-by-inputs`,
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
   * @param params The `ExpertControllerService.ListEvidencesByInputsUsingGETParams` containing the following parameters:
   *
   * - `inputNames`: inputNames
   *
   * - `expertIdentification`: expertIdentification
   *
   * @return OK
   */
  listEvidencesByInputsUsingGET(params: ExpertControllerService.ListEvidencesByInputsUsingGETParams): __Observable<Array<PhysicalEvidence>> {
    return this.listEvidencesByInputsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PhysicalEvidence>)
    );
  }
}

module ExpertControllerService {

  /**
   * Parameters for addUsingPOST
   */
  export interface AddUsingPOSTParams {

    /**
     * name
     */
    name?: string;

    /**
     * identification
     */
    identification?: string;
  }

  /**
   * Parameters for addExpertIdentificationUsingPOST
   */
  export interface AddExpertIdentificationUsingPOSTParams {

    /**
     * sourceName
     */
    sourceName?: string;

    /**
     * identification
     */
    identification?: string;

    /**
     * expertIdentification
     */
    expertIdentification?: string;
  }

  /**
   * Parameters for addWithBirthdateUsingPOST
   */
  export interface AddWithBirthdateUsingPOSTParams {

    /**
     * name
     */
    name?: string;

    /**
     * identification
     */
    identification?: string;

    /**
     * dateOfBirth
     */
    dateOfBirth?: string;
  }

  /**
   * Parameters for collectEvidencesUsingPOST
   */
  export interface CollectEvidencesUsingPOSTParams {

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

  /**
   * Parameters for deleteExpertIdentificationUsingPOST
   */
  export interface DeleteExpertIdentificationUsingPOSTParams {

    /**
     * sourceName
     */
    sourceName?: string;

    /**
     * identification
     */
    identification?: string;

    /**
     * expertIdentification
     */
    expertIdentification?: string;
  }

  /**
   * Parameters for listEvidencesUsingGET
   */
  export interface ListEvidencesUsingGETParams {

    /**
     * inputName
     */
    inputName?: string;

    /**
     * expertIdentification
     */
    expertIdentification?: string;
  }

  /**
   * Parameters for listEvidencesByInputsUsingGET
   */
  export interface ListEvidencesByInputsUsingGETParams {

    /**
     * inputNames
     */
    inputNames?: Array<string>;

    /**
     * expertIdentification
     */
    expertIdentification?: string;
  }
}

export { ExpertControllerService }
