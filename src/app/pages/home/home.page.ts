import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private navCtrl: NavController) { }

    /**
       * @author Amilton Santos
       * Método reponsável por navegar para a 
       * tela selecionada
       */
    public async touchNavParam(param?: any) {
        await this.navCtrl.navigateForward(param);
    }

    public openExternal(link: any) {
        window.open(link, '_system', 'location=yes'); 
        return false;
     }
}
