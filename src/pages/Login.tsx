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
import { loginUser } from "../firebaseConfig";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(username, password);
    console.log(`${res ? "login success" : "login failed"}`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
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
        <IonButton onClick={login}>Login</IonButton>
        <p>
          New here? <Link to="/resister">Resister</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
