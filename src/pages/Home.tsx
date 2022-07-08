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

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            placeholder="with placeholder, without label"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput placeholder="disabled input" value={text} disabled></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">clear Input</IonLabel>
          <IonInput onIonChange={(e: any) => setInput(e.target.value)} clearInput />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">stacked label</IonLabel>
          <IonInput onIonChange={(e: any) => setInput(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Floating Label</IonLabel>
          <IonInput value={text}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Fixed Label</IonLabel>
          <IonInput value={text}></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
