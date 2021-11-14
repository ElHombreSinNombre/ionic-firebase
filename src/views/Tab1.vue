<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-row style="border-bottom: groove;">
      <ion-col col-4>
      <ion-label >header</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >header</ion-label>
    </ion-col>
      <ion-col col-4>
      <ion-label >header</ion-label>
    </ion-col>
  </ion-row>
  <ion-row style="border-bottom: groove;">
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >02/02/2018</ion-label>
    </ion-col>
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
  </ion-row>
  <ion-row style="border-bottom: groove;">
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >02/02/2018</ion-label>
    </ion-col>
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
  </ion-row>
  <ion-row >
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >02/02/2018</ion-label>
    </ion-col>
      <ion-col col-4>
      <ion-label >row</ion-label>
    </ion-col>
  </ion-row>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '../components/ExploreContainer.vue';
import { getDocs, collection } from 'firebase/firestore/lite';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}

/*const querySnapshot = await getDocs(collection(db, "cars"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/
</script>