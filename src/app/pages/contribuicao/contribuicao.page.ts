import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-contribuicao',
    templateUrl: './contribuicao.page.html',
    styleUrls: ['./contribuicao.page.scss'],
})
export class ContribuicaoPage {
    chavePixDizimo: string = '00184519000177';
    chavePixOferta: string = 'parceirosmissionarios@hotmail.com';

    constructor(private toastController: ToastController) { }

    copyToClipboardChavePix(msg: number) {
        if (msg === 1) {
            navigator.clipboard.writeText(this.chavePixDizimo);
        } else {
            navigator.clipboard.writeText(this.chavePixOferta);
        }
        this.presentToast('bottom');
    }

    async presentToast(position: 'top' | 'bottom' | 'bottom') {
        const toast = await this.toastController.create({
            message: 'Pix Copiado!',
            duration: 1500,
            position: position,
            cssClass: 'toast-custom-pix',
        });

        await toast.present();
    }

}
