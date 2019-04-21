/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseEntity } from '../models/response-entity';

/**
 * Userinfo Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserinfoControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserinfoControllerService.CurrentUserUsingGETParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   *
   * - `enabled`:
   *
   * - `credentialsNonExpired`:
   *
   * - `authorities[0].authority`:
   *
   * - `accountNonLocked`:
   *
   * - `accountNonExpired`:
   *
   * @return OK
   */
  currentUserUsingGETResponse(params: UserinfoControllerService.CurrentUserUsingGETParams): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.password != null) __params = __params.set('password', params.password.toString());
    if (params.enabled != null) __params = __params.set('enabled', params.enabled.toString());
    if (params.credentialsNonExpired != null) __params = __params.set('credentialsNonExpired', params.credentialsNonExpired.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.accountNonLocked != null) __params = __params.set('accountNonLocked', params.accountNonLocked.toString());
    if (params.accountNonExpired != null) __params = __params.set('accountNonExpired', params.accountNonExpired.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * @param params The `UserinfoControllerService.CurrentUserUsingGETParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   *
   * - `enabled`:
   *
   * - `credentialsNonExpired`:
   *
   * - `authorities[0].authority`:
   *
   * - `accountNonLocked`:
   *
   * - `accountNonExpired`:
   *
   * @return OK
   */
  currentUserUsingGET(params: UserinfoControllerService.CurrentUserUsingGETParams): __Observable<ResponseEntity> {
    return this.currentUserUsingGETResponse(params).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module UserinfoControllerService {

  /**
   * Parameters for currentUserUsingGET
   */
  export interface CurrentUserUsingGETParams {
    username?: string;
    password?: string;
    enabled?: boolean;
    credentialsNonExpired?: boolean;
    authorities0Authority?: string;
    accountNonLocked?: boolean;
    accountNonExpired?: boolean;
  }
}

export { UserinfoControllerService }
