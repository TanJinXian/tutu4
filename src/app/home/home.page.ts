import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheet: ActionSheetController){}

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log("You Delete me");
          }
        },
        {
          text: 'Add',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log("You add me");
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
