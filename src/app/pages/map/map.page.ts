import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  standalone: true,
  selector: 'app-map',
  imports: [IonicModule],
  templateUrl: './map.page.html'
})
export class MapPage implements AfterViewInit {

  map!: L.Map;

  ngAfterViewInit() {
    this.loadMap();
    this.addPins();
  }

  loadMap() {
    this.map = L.map('map').setView([20.6597, -103.3496], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Quetzart Map'
    }).addTo(this.map);
  }

  addPins() {
    const establishments = [
      {
        name: 'Café Arte Guadalajara',
        lat: 20.6736,
        lng: -103.344
      },
      {
        name: 'Restaurante Cultural Zapopan',
        lat: 20.7236,
        lng: -103.384
      }
    ];

    establishments.forEach(e => {
      L.marker([e.lat, e.lng])
        .addTo(this.map)
        .bindPopup(`<b>${e.name}</b>`);
    });
  }
}
