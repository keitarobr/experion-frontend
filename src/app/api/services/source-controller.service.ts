/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EvidenceSource } from '../models/evidence-source';

/**
 * Source Controller
 */
@Injectable({
  providedIn: 'root',
})
class SourceControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  listSourcesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<EvidenceSource>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sources/find-all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EvidenceSource>>;
      })
    );
  }
  /**
   * @return OK
   */
  listSourcesUsingGET(): __Observable<Array<EvidenceSource>> {
    return this.listSourcesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<EvidenceSource>)
    );
  }

  /**
   * @param params The `SourceControllerService.AddSourceUsingPOSTParams` containing the following parameters:
   *
   * - `url`: url
   *
   * - `name`: name
   *
   * @return OK
   */
  addSourceUsingPOSTResponse(params: SourceControllerService.AddSourceUsingPOSTParams): __Observable<__StrictHttpResponse<EvidenceSource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.url != null) __params = __params.set('url', params.url.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sources/sources/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EvidenceSource>;
      })
    );
  }
  /**
   * @param params The `SourceControllerService.AddSourceUsingPOSTParams` containing the following parameters:
   *
   * - `url`: url
   *
   * - `name`: name
   *
   * @return OK
   */
  addSourceUsingPOST(params: SourceControllerService.AddSourceUsingPOSTParams): __Observable<EvidenceSource> {
    return this.addSourceUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as EvidenceSource)
    );
  }

  /**
   * @param name name
   * @return OK
   */
  findSourceByNameUsingGETResponse(name?: string): __Observable<__StrictHttpResponse<Array<EvidenceSource>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sources/sources/find-by-name`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EvidenceSource>>;
      })
    );
  }
  /**
   * @param name name
   * @return OK
   */
  findSourceByNameUsingGET(name?: string): __Observable<Array<EvidenceSource>> {
    return this.findSourceByNameUsingGETResponse(name).pipe(
      __map(_r => _r.body as Array<EvidenceSource>)
    );
  }
}

module SourceControllerService {

  /**
   * Parameters for addSourceUsingPOST
   */
  export interface AddSourceUsingPOSTParams {

    /**
     * url
     */
    url?: string;

    /**
     * name
     */
    name?: string;
  }
}

export { SourceControllerService }
