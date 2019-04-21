/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseEntity } from '../models/response-entity';
import { AuthenticationRequest } from '../models/authentication-request';

/**
 * Auth Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthControllerService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param data data
   * @return OK
   */
  signinUsingPOSTResponse(data: AuthenticationRequest): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/signin`,
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
   * @param data data
   * @return OK
   */
  signinUsingPOST(data: AuthenticationRequest): __Observable<ResponseEntity> {
    return this.signinUsingPOSTResponse(data).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module AuthControllerService {
}

export { AuthControllerService }
