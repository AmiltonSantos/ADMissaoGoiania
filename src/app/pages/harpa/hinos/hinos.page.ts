import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-hinos',
    templateUrl: './hinos.page.html',
    styleUrls: ['./hinos.page.scss'],
})
export class HinosPage implements OnInit {

    @Input() public titulo: string;
    @Input() public musica: string;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        console.log(this.musica);
    }

    async touchVoltarModal() {
        await this.modalCtrl.dismiss();
    }
}
