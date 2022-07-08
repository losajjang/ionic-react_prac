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
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { atCircle, fingerPrint, star } from "ionicons/icons";

const arr = [
  { name: "Finn", desc: "this guy rocks!" },
  { name: "Han", desc: "Trust me, I am a programmer" },
  { name: "Rey", desc: "I am done with it!" },
  { name: "Luke", desc: "Your thoughts betray you" },
  { name: "Poe", desc: "New Ride" },
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h3>1. expand 속성</h3>
        </IonText>
        <IonButton color="primary">expand="default"</IonButton>
        <IonButton expand="full" color="primary">
          expand="full"
        </IonButton>
        <IonButton expand="block" color="primary">
          expand="block"
        </IonButton>

        <IonText>
          <h3>2. fill 속성</h3>
        </IonText>
        <IonButton color="primary">fill="default"</IonButton>
        <IonButton fill="clear" color="primary">
          fill="clear"
        </IonButton>
        <IonButton fill="outline" color="primary">
          fill="outline"
        </IonButton>
        <IonButton fill="solid" color="primary">
          fill="solid"
        </IonButton>

        <IonText>
          <h3>3. size 속성</h3>
        </IonText>
        <IonButton color="primary" size="small">
          size="small"
        </IonButton>
        <IonButton color="primary" size="default">
          size="default"
        </IonButton>
        <IonButton color="primary" size="large">
          size="large"
        </IonButton>

        <IonText>
          <h3>4. disabled 속성</h3>
        </IonText>
        <IonButton color="primary" disabled>
          disabled
        </IonButton>

        <IonText>
          <h3>5. mode 속성</h3>
        </IonText>
        <IonButton color="primary" mode="ios">
          mode="ios"
        </IonButton>
        <IonButton color="primary" mode="md">
          mode="md"
        </IonButton>

        <IonText>
          <h3>6. shape 속성</h3>
        </IonText>
        <IonButton color="primary" shape="round">
          shape="round"
        </IonButton>

        <IonText>
          <h3>7. strong 속성</h3>
        </IonText>
        <IonButton color="primary" strong>
          strong
        </IonButton>

        <IonText>
          <h3>8. slot 속성</h3>
        </IonText>
        <IonButton color="primary">
          <IonIcon slot="" icon={star}></IonIcon>
          slot=""
        </IonButton>
        <IonButton color="primary">
          <IonIcon slot="end" icon={star}></IonIcon>
          slot="end"
        </IonButton>
        <IonButton color="primary">
          <IonIcon slot="icon-only" icon={star}></IonIcon>
          slot="icon-only"
        </IonButton>
        <IonButton color="primary">
          <IonIcon slot="start" icon={star}></IonIcon>
          slot="start"
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
