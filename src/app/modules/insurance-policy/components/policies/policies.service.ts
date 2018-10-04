import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { POLICIES } from './mock-data';

export interface Config {
    policiesUrl: string;
}

@Injectable()
export class PoliciesService {

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<any[]> {
        return Observable.of(POLICIES);
    }

    getColumns(): string[] {
        return ['amountInsured', 'email', 'inceptionDate', 'installmentPayment'];
    }

}
