import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ConnectHarpaService } from 'src/app/services/connect-harpa.service';
import { HinosPage } from './hinos/hinos.page';

@Component({
    selector: 'app-harpa',
    templateUrl: './harpa.page.html',
    styleUrls: ['./harpa.page.scss'],
})
export class HarpaPage implements OnInit {

    public dadosHarpaCrista: { id: number, titulo: string, musica: string }[] = [];
    public listaHapa: { id: number, titulo: string, musica: string }[] = [];
    public desabilitandoLoad = false;

    constructor(private connectHarpaService: ConnectHarpaService,
        private modalCtrl: ModalController,
        private toastController: ToastController,
        private loadingCtrl: LoadingController) { }

    async ngOnInit() {
        const loading = await this.loadingCtrl.create({
            message: 'Carregando...',
            duration: 100000,
        });

        loading.present();
        await this.connectHarpaService.loadData()
            .then((data) => {
                this.desabilitandoLoad = false;
                this.dadosHarpaCrista = data;
                setTimeout(async () => {
                    await loading.dismiss();
                }, 400);
            })
            .catch(async (error) => {
                console.error('Erro ao carregar os dados:', error);
                await loading.dismiss();
            });

        await this.carrega20Primeiros();
    }

    async detalharHinos(titulo: string, musica: string) {
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

    async carrega20Primeiros() {

        this.listaHapa = [];

        for (let i = 0; i < 50; i++) {
            if (this.dadosHarpaCrista[i]) {
                this.listaHapa.push(this.dadosHarpaCrista[i]);
            }
        }
    }

    async loadData(event: any) {
        setTimeout(async () => {
            if (this.dadosHarpaCrista.length === this.listaHapa.length) {
                await this.presentToast('Fim da lista');
                this.desabilitandoLoad = true;
                event.target.complete();
            } else {
                const tamanhoAtual = this.listaHapa.length;
                const restante = this.dadosHarpaCrista.length - this.listaHapa.length;
                if (restante > 20) {
                    for (let i = tamanhoAtual; i < tamanhoAtual + 20; i++) {
                        this.listaHapa.push(this.dadosHarpaCrista[i]);
                    }
                } else {
                    for (let i = tamanhoAtual; i < this.dadosHarpaCrista.length; i++) {
                        this.listaHapa.push(this.dadosHarpaCrista[i]);
                    }
                }
            }
            event.target.complete();

        }, 500);
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            cssClass: 'toastCss',
            duration: 3000
        });
        toast.present();
    }
}
