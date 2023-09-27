import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-livros',
    templateUrl: './livros.page.html',
    styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

    @Input() public livro: any;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
        console.log(this.livro);
    }

    async touchVoltarModal() {
        await this.modalCtrl.dismiss();
    }

}
