<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Ajuda!</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
    <ion-list>
      <ion-item>
        <ion-label>Como criar novas tarefas</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Como excluir</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Como adcionar membros, datas e checklist's</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Como mudar a configuração de tarefas</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Como mudar os temas das tarefas</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Reportar erro</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Não achou o que proucurava ?</ion-label>
      </ion-item>
      <ion-item>
        <ion-label></ion-label>
      </ion-item>
    </ion-list>
  
</ion-content>
    </ion-page>
  </template>    
  
  <script lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/vue';  
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList },
    });
  </script>