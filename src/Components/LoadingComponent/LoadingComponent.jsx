import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./LoadingComponent.module.scss";

const LoadingComponent = () => {
  return (
    <div className={styles.container}>
      <p className={styles.checking}>Ckecking weather in your localization</p>
      <Loader type="ThreeDots" color="whitesmoke" height={100} width={100} />
    </div>
  );
};

export default LoadingComponent;
