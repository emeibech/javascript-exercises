const ftoc = function(fahrenheit) {
let convertedToCelsius = (fahrenheit - 32) * 5/9;
let celsius = Number(convertedToCelsius.toFixed(1));
if (celsius === 0.0) {
  return 0;
}
else {
return celsius;
}
};

const ctof = function(celsius) {
let convertedToFahrenheit = (celsius * 9/5) + 32;
let fahrenheit = Number(convertedToFahrenheit.toFixed(1));
if (fahrenheit === 0.0) {
  return 0;
}
else {
return fahrenheit;
}
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
