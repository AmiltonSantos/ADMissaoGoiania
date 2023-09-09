import { Component, OnInit } from '@angular/core';
import { ConnectBibliaService } from 'src/app/services/connect-biblia.service';

@Component({
    selector: 'app-biblia',
    templateUrl: './biblia.page.html',
    styleUrls: ['./biblia.page.scss'],
})
export class BibliaPage implements OnInit {

    constructor(private connectBibliaService: ConnectBibliaService) {
    }

    async ngOnInit() {
        await this.connectBibliaService.loadData()
            .then((data) => {
                // Use os dados carregados aqui
                console.log(data); // Exemplo: exibindo os dados no console
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }

}
