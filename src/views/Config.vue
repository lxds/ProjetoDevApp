<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Configuração</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">

        <ion-list>
            <ion-item>
                <ion-label>Abrir configurações do sistema</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Selecionar tema</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Perfil e visibilidade</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Definir idioma</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Excluir conta</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Sobre o aplicativo</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Sair</ion-label>
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