import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectHarpaService } from 'src/app/services/connect-harpa.service';
import { HinosPage } from './hinos/hinos.page';

@Component({
    selector: 'app-harpa',
    templateUrl: './harpa.page.html',
    styleUrls: ['./harpa.page.scss'],
})
export class HarpaPage implements OnInit {

    public dadosHarpaCrista: { id: number, titulo: string, musica: string }[] = [];

    constructor(private connectHarpaService: ConnectHarpaService,
        private modalCtrl: ModalController) { }

    async ngOnInit() {
        await this.connectHarpaService.loadData()
            .then((data) => {
                this.dadosHarpaCrista = data;
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }

    async detalharHinos(titulo: string, musica: string ) {
        const modal = await this.modalCtrl.create({
            component: HinosPage,
            cssClass: 'modalInterno',
            componentProps: {
                titulo: titulo,
                musica: musica
            }
        });
        await modal.present();
    }
}
