function temperatureConverter(answer) {
    answer = parseFloat(answer);
    document.getElementById("outputCelcius").innerHTML=(answer-32)/1.8;
  }
  temperatureConverter(answer)