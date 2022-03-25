import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import GalleryGrid from "../components/GalleryGrid";
import HeaderBtn from "../components/HeaderBtn";

import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderBtn viewName="Tab 1!" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GalleryGrid />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
