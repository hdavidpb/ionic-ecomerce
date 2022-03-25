import React, { useState } from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";

import { Camera, CameraResultType } from "@capacitor/camera";
import "./Tab3.css";
import HeaderBtn from "../components/HeaderBtn";

const Tab3: React.FC = () => {
  const [image, setImage] = useState<string>("");

  const takePicture = async () => {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setImage(photo.webPath || "");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderBtn viewName="Tab 3!" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePicture}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        {image !== "" ? (
          <img src={image} alt="img" />
        ) : (
          <ExploreContainer name="Take a picture" />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
