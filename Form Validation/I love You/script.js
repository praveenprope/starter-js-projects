// DOM Elements
const responseMessage = document.getElementById('responseMessage');
const speakButton = document.getElementById('speakButton');
const customMessageInput = document.getElementById('customMessage');

// Variable to store the name recognized by speech
let recognizedName = "";

// Function to speak
const speakMessage = (name, customMessage) => {
  if (!name) {
    responseMessage.textContent = "Please say a name first!";
    return;
  }

  if (!customMessage) {
    responseMessage.textContent = "Please add a message to speak!";
    return;
  }

  const message = `${name}, ${customMessage}`;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'hi-IN';
  synth.speak(utterance);
  responseMessage.textContent = `Speaking: "${message}"`;
};

// Speech Recognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';

  // Triggered when the user speaks
  recognition.onresult = (event) => {
    recognizedName = event.results[0][0].transcript.trim();
    responseMessage.textContent = `You said: "${recognizedName}"`;
  };

  // Restart recognition when it ends
  recognition.onend = () => {
    recognition.start();
  };

  // Start recognition immediately
  recognition.start();
} else {
  responseMessage.textContent =
    "Sorry, your browser doesn't support Speech Recognition.";
}

// Button to trigger speaking
speakButton.addEventListener('click', () => {
  const customMessage = customMessageInput.value.trim();
  speakMessage(recognizedName, customMessage);
});
