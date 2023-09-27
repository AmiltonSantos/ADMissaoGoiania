import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-site',
    templateUrl: './site.page.html',
    styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
    link = 'https://admissaojardimamerica.com.br/';

    constructor() { }

    ngOnInit() {
        window.open(this.link, '_system', 'location=yes');
        return false;
    }

}
