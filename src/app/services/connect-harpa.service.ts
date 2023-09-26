import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConnectHarpaService {

    constructor(private http: HttpClient) { }

    loadData(): Promise<any> {
        const url = 'assets/data/harpa/harpa.json'; // Caminho relativo ao arquivo JSON
        return this.http.get(url).toPromise();
    }
}
