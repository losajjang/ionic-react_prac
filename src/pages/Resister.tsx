import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonItemOptions,
  IonItemSliding,
  IonItemOption,
  IonButton,
  IonIcon,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { atCircle, fingerPrint, star } from "ionicons/icons";
import { KeyboardEvent, useEffect, useState } from "react";

const arr = [
  { name: "Finn", desc: "this guy rocks!" },
  { name: "Han", desc: "Trust me, I am a programmer" },
  { name: "Rey", desc: "I am done with it!" },
  { name: "Luke", desc: "Your thoughts betray you" },
  { name: "Poe", desc: "New Ride" },
];

const Resister: React.FC = () => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example Page!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Hello example Page!</IonContent>
    </IonPage>
  );
};

export default Resister;
