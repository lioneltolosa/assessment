import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Config {
    policiesUrl: string;
}

@Injectable()
export class PoliciesService {
    configUrl = '/src/assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.configUrl, { observe: 'response' });
      }
}
