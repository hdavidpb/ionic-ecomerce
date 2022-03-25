import React from "react";
import { IonItem, IonAvatar, IonLabel } from "@ionic/react";
import { ICharacter } from "../interfaces/interfaces";

const EployeeItem: React.FC<{ charater: ICharacter }> = ({ charater }) => {
  return (
    <IonItem>
      <IonAvatar slot="start">
        <img src={charater.image} />
      </IonAvatar>
      <IonLabel>
        <h2>{charater.name}</h2>
        <p>{charater.species}</p>
      </IonLabel>
    </IonItem>
  );
};

export default EployeeItem;
