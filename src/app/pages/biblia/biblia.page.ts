import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ConnectBibliaService } from 'src/app/services/connect-biblia.service';
import { LivrosPage } from './livros/livros.page';

@Component({
    selector: 'app-biblia',
    templateUrl: './biblia.page.html',
    styleUrls: ['./biblia.page.scss'],
})
export class BibliaPage implements OnInit {

    public dadosBiblia: { abbrev_livro: string, nome_livro: string }[] = [];
    public abreLivroBiblia: boolean = false;

    constructor(private connectBibliaService: ConnectBibliaService,
        private loadingCtrl: LoadingController,
        private modalCtrl: ModalController) {
    }

    async ngOnInit() {
        const loading = await this.loadingCtrl.create({
            message: 'Carregando...',
            duration: 100000,
            spinner: 'circles'
        });

        loading.present();
        await this.connectBibliaService.loadBibliaData()
            .then((data) => {
                this.dadosBiblia = data;
                setTimeout(async () => {
                    await loading.dismiss();
                }, 400);
            })
            .catch(async (error) => {
                console.error('Erro ao carregar os dados:', error);
                await loading.dismiss();
            });
    }

    async detalharLivros(livro: any) {
        const modal = await this.modalCtrl.create({
            component: LivrosPage,
            cssClass: 'modalInterno',
            componentProps: {
                livro: livro
            }
        });
        await modal.present();
    }

}
