import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ConnectBibliaService } from 'src/app/services/connect-biblia.service';
import { VersiculosPage } from './versiculos/versiculos.page';

@Component({
    selector: 'app-livros',
    templateUrl: './livros.page.html',
    styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

    @Input() public livro: any;
    //public dadosLivro: {abbrev_livro: string, nome_livro: string}[] = [];
    public dadosLivro = [];

    constructor(private modalCtrl: ModalController,
        private connectBibliaService: ConnectBibliaService,
        private loadingCtrl: LoadingController) { }

    async ngOnInit() {
        const loading = await this.loadingCtrl.create({
            message: 'Carregando...',
            duration: 100000,
            spinner: 'circles'
        });

        loading.present();
        await this.connectBibliaService.loadLivroData(this.livro.nome_reference)
            .then(async (data) => {
                this.dadosLivro = data;
                setTimeout(async () => {
                    await loading.dismiss();
                }, 400);
            })
            .catch(async (error) => {
                console.error('Erro ao carregar os dados:', error);
                await loading.dismiss();
            });
    }

    public async listaLivrosBiblia(livros: any) {
        for (let capitulo in livros) {
            this.dadosLivro.push(parseInt(capitulo) + 1);
        }
    }

    async detalharVersiculo(versiculo: any) {
        const modal = await this.modalCtrl.create({
            component: VersiculosPage,
            cssClass: 'modalInterno',
            componentProps: {
                versiculo: versiculo
            }
        });
        await modal.present();
    }

    async touchVoltarModal() {
        await this.modalCtrl.dismiss();
    }

}
