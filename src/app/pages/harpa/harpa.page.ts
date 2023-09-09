import { Component, OnInit } from '@angular/core';
import { ConnectHarpaService } from 'src/app/services/connect-harpa.service';

@Component({
    selector: 'app-harpa',
    templateUrl: './harpa.page.html',
    styleUrls: ['./harpa.page.scss'],
})
export class HarpaPage implements OnInit {

    constructor(private connectHarpaService: ConnectHarpaService) { }

    async ngOnInit() {
        await this.connectHarpaService.loadData()
            .then((data) => {
                // Use os dados carregados aqui
                console.log(data); // Exemplo: exibindo os dados no console
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }
}
