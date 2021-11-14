<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
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

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '../components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}

/*const querySnapshot = await getDocs(collection(db, "people"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/
</script>