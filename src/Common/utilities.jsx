export const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
};

export const kelvineToCelsius = (kelvine) => {
  return Math.round(kelvine - 273.15);
};

export const mperSectoKmperhour = (speed) => {
  return Math.round(speed * 3.6);
};

