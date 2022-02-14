import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import styles from "./App.module.css";
import { LoginButton } from "./components/button/Button";
import { LoginForm } from "./containers/LoginForm/LoginForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.loginPage}>
        <img src="main_img.png" className={styles.mainImg} alt="logoImg" />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
