//Utility functions for whatever


//unit conversions

export const kelvinToCelsius = (k) => {
	return (k * 100 - 27315)/100;
}

export const kelvinToFahrenheit = (k) => {
	return ((k * 18)*10 - 45967)/100
}

export const celsiusToKelvin = (c) => {
	return (c * 100 + 27315)/100;
}

export const celsiusToFahrenheit = (c) => {
	return (c * 18)/10 + 32;
}

export const fahrenheitToCelsius = (f) =>{
	return ((f - 32) / 18) * 10;
}

export const fahrenheitToKelvin = (f) => {
	return ((f + 45967)/1800) * 10;
}
