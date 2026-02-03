import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Pago</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="close()">✖</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Transferencia bancaria</h2>

      <ion-card>
        <ion-card-content>
          Banco: BBVA<br />
          Cuenta: 1234567890<br />
          CLABE: 012345678901234567<br />
          Titular: Quetzart SA
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" (click)="close()">
        Listo
      </ion-button>

    </ion-content>
  `
})
export class PurchaseModal {

  private modalCtrl = inject(ModalController);

  close() {
    this.modalCtrl.dismiss();
  }
}
