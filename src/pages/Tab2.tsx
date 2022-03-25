import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import EmployeeItem from "../components/EmployeeItem";
import "./Tab2.css";

import { ICharacter } from "../interfaces/interfaces";
import HeaderBtn from "../components/HeaderBtn";

const Tab2: React.FC = () => {
  const [people, setPeople] = useState<ICharacter[]>([]);

  useIonViewDidEnter(async () => {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const data = await result.json();
    console.log(data);
    setPeople(data.results);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderBtn viewName="Tab 2!" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {people.map((character) => (
            <EmployeeItem key={character.id} charater={character} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
