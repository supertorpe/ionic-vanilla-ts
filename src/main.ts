import './style.css';
import './ionic';
import { alertController } from '@ionic/core';

import iconHome from '@ionic/core/dist/ionic/svg/home.svg';
import iconMenu from '@ionic/core/dist/ionic/svg/menu.svg';

const ICON_MAP = ['home.svg', iconHome, 'menu.svg', iconMenu];

async function showAlert(header: string, subheader: string, message: string, buttons: string[]) {
  const alert = await alertController.create({
    header: header,
    subHeader: subheader,
    message: message,
    buttons: buttons
   });
   alert.present();
}

document.addEventListener("DOMContentLoaded", () => {
  // bind icons
  document.querySelectorAll('ion-icon').forEach((el: HTMLIonIconElement) => {
    const dataSrc: string | null = el.getAttribute('data-src');
    if (dataSrc != null) el.src = ICON_MAP[ICON_MAP.indexOf(dataSrc) + 1];
  });
  // show alert
  showAlert('Header', 'Subheader', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ['OK']);
});