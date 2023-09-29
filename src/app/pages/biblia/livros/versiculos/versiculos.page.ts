import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-versiculos',
    templateUrl: './versiculos.page.html',
    styleUrls: ['./versiculos.page.scss'],
})
export class VersiculosPage implements OnInit {

    @Input() public versiculo: any;
    listVersiculo = [];

    constructor(private modalCtrl: ModalController,
        private loadingCtrl: LoadingController) { }

    async ngOnInit() {
        const loading = await this.loadingCtrl.create({
            message: 'Carregando...',
            duration: 100000,
            spinner: 'circles'
        });

        loading.present();

        try {
            const objectValue = Object.values(this.versiculo)[0];

            this.listVersiculo = Object.entries(objectValue);

            setTimeout(async () => {
                await loading.dismiss();
            }, 400);
        } catch (error) {
            console.log('Erro:', error);
            await loading.dismiss();
        }
    }

    async touchVoltarModal() {
        await this.modalCtrl.dismiss();
    }
}
