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
import { Link } from "react-router-dom";

const Resister: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setSPassword] = useState("");

  function resisterUser() {
    console.log(`username: ${username}, password: ${password}, confirm Password: ${cpassword}`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resister Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          value={username}
          type="text"
          placeholder="Username?"
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          value={password}
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonInput
          value={cpassword}
          type="password"
          placeholder="Confirm Password?"
          onIonChange={(e: any) => setSPassword(e.target.value)}
        />
        <IonButton onClick={resisterUser}>Resister</IonButton>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Resister;
