let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1, munstersDescription.length).toLowerCase();

console.log(munstersDescription);
