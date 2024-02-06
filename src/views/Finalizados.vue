<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Finalizados</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
     <ion-card>
      <IonCardHeader>
      <ion-input 
      label="Titulo" 
      label-placement="floating" 
      fill="outline" 
      placeholder="Ex: Passear com o cachorro"></ion-input>

      <br />

      <ion-input label="Discrição" 
      label-placement="floating" 
      fill="outline" 
      placeholder="Ex: ir com o cachorro no parque"></ion-input>
    
      <IonButton>Salvar</IonButton> <IonButton>Excluir</IonButton>
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
      name: 'Finalizados',
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