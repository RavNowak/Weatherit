import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./LoadingComponent.module.scss";

const LoadingComponent = ({ geoError }) => {
  return (
    <div className={styles.container}>
      {geoError ? (
        <>
          <p className={styles.oops}>Ooops</p>
          <p className={styles.geoInfo}>
            Please enable geolocation to use the application
          </p>
        </>
      ) : (
        <>
          <p className={styles.title}>Ckecking weather in your localization</p>
          <Loader
            type="ThreeDots"
            color="whitesmoke"
            height={100}
            width={100}
          />
        </>
      )}
    </div>
  );
};

export default LoadingComponent;
