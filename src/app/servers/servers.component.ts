import { Component } from "@angular/core";

@Component({
    //selector: '[app-servers]',
    //selector: '.app-servers',
    selector: 'app-servers', // should be
    template: `
        <app-server></app-server>
        <app-server></app-server>`
})
export class ServersComponent {

}