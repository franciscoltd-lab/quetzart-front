import { Component, Input, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { PurchaseModal } from './purchase.modal';

@Component({
  standalone: true,
  imports: [IonicModule],
  templateUrl: './artwork-detail.modal.html'
})
export class ArtworkDetailModal {

  @Input() artwork: any;

  private modalCtrl = inject(ModalController);

  close() {
    this.modalCtrl.dismiss();
  }

  async buy() {
    const modal = await this.modalCtrl.create({
      component: PurchaseModal
    });

    await modal.present();
  }
}
