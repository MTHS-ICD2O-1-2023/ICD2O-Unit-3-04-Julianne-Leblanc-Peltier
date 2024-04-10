// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const temperatureInFahrenheit = parseFloat(document.getElementById("temperature-in-fahrenheit").value)

  // process
  const temperatureInCelsius = (temperatureInFahrenheit - 32) * (5.0 / 9.0)

  // output
  document.getElementById("temperature-in-celsius").innerHTML = temperatureInCelsius.toFixed(3) + "°C"
}
