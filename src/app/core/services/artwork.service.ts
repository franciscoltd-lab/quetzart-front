import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArtworkService {

  getRandom() {
    return of([
      {
        id: 1,
        title: 'Atardecer en Jalisco',
        artistName: 'Juan Pérez',
        description: 'Obra inspirada en paisajes mexicanos.',
        price: 2500,
        imageUrl: 'https://picsum.photos/400?random=1'
      },
      {
        id: 2,
        title: 'Arte Abstracto',
        artistName: 'María López',
        description: 'Colores vibrantes y estilo moderno.',
        price: 3200,
        imageUrl: 'https://picsum.photos/400?random=2'
      }
    ]);
  }
}
