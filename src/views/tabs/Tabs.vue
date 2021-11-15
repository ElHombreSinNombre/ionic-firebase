<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/people">
          <ion-icon :icon="peopleOutline" />
          <ion-label>People</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/cars">
          <ion-icon :icon="carOutline" />
          <ion-label>Cars</ion-label>
        </ion-tab-button>
        

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { carOutline, peopleOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      carOutline, 
      peopleOutline, 
    }
  }
}
</script>