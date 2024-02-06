<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Group Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <IonCardHeader>
          <ion-input label="Titulo" label-placement="floating" fill="outline"
            placeholder="Ex: Reunião com fornecedor "></ion-input>

          <br />

          <ion-input label="Descrição" label-placement="floating" fill="outline"
            placeholder="Ex: entrar em call com o fornecedor"></ion-input>
          <IonButton>Salvar</IonButton>
          <IonButton>Excluir</IonButton>

        </IonCardHeader>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { IonButton, IonCardHeader, IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'GroupPage',
  components: {
    IonButton,
    IonContent,
    IonPage,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>