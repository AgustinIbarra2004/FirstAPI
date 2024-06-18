const formulario = document.getElementById("formularioTiempo");

formulario.addEventListener("submit",function (event) {
  //Seleciona elementos 
const ciudad = document.getElementById("cityInput").value;
const pais = document.getElementById("PaisSelecionado").value;
const button = document.getElementById("button");


  event.preventDefault()
  //Usar la API

const apiKey = "fae69e3e867aba52a37a68cf9896add4";
const cityName = ciudad;
const stateCode = ""; 
const countryCode = pais; 
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}&units=metric&lang=es`;

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Manejar la respuesta de la API
    console.log('Datos del clima:', data);

    const temperatura = data.main.temp;
    const humedad = data.main.humidity

    const resultadoTiempo = document.getElementById("resultadoTiempo");
    resultadoTiempo.innerHTML = `
    <h2>Clima en ${data.name} ,${data.sys.country}</h2>
    <p>Temperatura : ${temperatura} °C</p>
    <p>Humedad : ${humedad}%</p>
    <p>Viento: ${data.wind.speed} m/s</p>
    <p>Clima: ${data.weather[0].description}</p>`
  })
  .catch(error => {
    // Manejar errores
    console.error('Error:', error);
  });

  
})

