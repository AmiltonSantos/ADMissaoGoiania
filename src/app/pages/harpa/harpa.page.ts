import { Component, OnInit } from '@angular/core';
import { ConnectHarpaService } from 'src/app/services/connect-harpa.service';

@Component({
    selector: 'app-harpa',
    templateUrl: './harpa.page.html',
    styleUrls: ['./harpa.page.scss'],
})
export class HarpaPage implements OnInit {

    public dadosHarpaCrista: { id: number, titulo: string }[] = [];

    constructor(private connectHarpaService: ConnectHarpaService) { }

    async ngOnInit() {
        await this.connectHarpaService.loadData()
            .then((data) => {
                this.dadosHarpaCrista = data;
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }
}
