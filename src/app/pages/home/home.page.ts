
import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ArtworkService } from '../../core/services/artwork.service';
import { ArtworkDetailModal } from '../../shared/modals/artwork-detail.modal';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html'
})
export class HomePage {

  private artworkService = inject(ArtworkService);
  private modalCtrl = inject(ModalController);

  artworks$ = this.artworkService.getRandom();

  async openArtwork(art: any) {
    const modal = await this.modalCtrl.create({
      component: ArtworkDetailModal,
      componentProps: { artwork: art }
    });

    await modal.present();
  }
}
