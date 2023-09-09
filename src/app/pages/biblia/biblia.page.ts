import { Component, OnInit } from '@angular/core';
import { ConnectBibliaService } from 'src/app/services/connect-biblia.service';

@Component({
    selector: 'app-biblia',
    templateUrl: './biblia.page.html',
    styleUrls: ['./biblia.page.scss'],
})
export class BibliaPage implements OnInit {

    dadosBiblia: { abbrev: string, name: string }[] = [];

    constructor(private connectBibliaService: ConnectBibliaService) {
    }

    async ngOnInit() {
        await this.connectBibliaService.loadData()
            .then((data) => {
                this.dadosBiblia = data;
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }

}
