import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConnectBibliaService {

    constructor(private http: HttpClient) { }

    loadBibliaData(): Promise<any> {
        const url = 'assets/data/biblias/info_biblia.json'; // Caminho relativo ao arquivo JSON
        return this.http.get(url).toPromise();
    }

    loadLivroData(livro: any): Promise<any> {
        const url = `assets/data/biblias/biblia_aa/${livro}.json`; // Caminho relativo ao arquivo JSON
        return this.http.get(url).toPromise();
    }
}