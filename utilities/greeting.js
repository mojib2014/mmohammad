// ******* Greeting Function *********
export const greet = (greetingMessage) => {
  let greeting;
  const time = new Date().getHours();
  if (time < 11) greeting = "Morning";
  else if (time < 20) greeting = "Day";
  else greeting = "Evening";
  greetingMessage.textContent = `Hello There, Good ${greeting}!`;
};
