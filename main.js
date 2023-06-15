// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  var terminalOutput = document.querySelector(".terminal-output");
  var terminalPrompt = document.querySelector(".terminal-prompt");
  var terminalInput = document.createElement("input");

  // Set the input type to "text" and add it to the prompt
  terminalInput.type = "text";
  terminalPrompt.appendChild(terminalInput);

  // Focus the input when the page loads
  terminalInput.focus();

  // Handle the user's input
  terminalInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      // Get the user's command
      var command = terminalInput.value;

      // Create a new paragraph element for the command
      var commandElement = document.createElement("p");
      commandElement.textContent = "> " + command;

      // Create a new paragraph element for the output
      var outputElement = document.createElement("p");

      // Clear the input
      terminalInput.value = "";

      // Process the command
      if (command === "help") {
        outputElement.textContent = "Available commands: help, about, contact";
      } else if (command === "about") {
        outputElement.textContent = "This is a terminal-style website created using HTML, CSS, and JavaScript.";
      } else if (command === "contact") {
        outputElement.textContent = "You can reach us at contact@example.com.";
      } else {
        outputElement.textContent = "Command not found. Type 'help' to see available commands.";
      }

      // Add the command and output elements to the terminal
      terminalOutput.appendChild(commandElement);
      terminalOutput.appendChild(outputElement);

      // Scroll to the bottom of the terminal
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
});
