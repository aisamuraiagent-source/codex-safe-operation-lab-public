const validateButton = document.querySelector("#validate-button");
const logOutput = document.querySelector("#log-output");
const statusCards = document.querySelectorAll("[data-status-card]");
const storageKey = "codexPanelLastValidation";

function setValidatedState(timestamp) {
  statusCards.forEach((card) => {
    card.classList.remove("is-pending");
    card.classList.add("is-ok");

    const label = card.querySelector(".status-label");
    label.textContent = "OK";
  });

  validateButton.classList.add("is-validated");
  validateButton.textContent = "Fluxo registrado";
  logOutput.textContent = `Última conferência manual: ${timestamp}. Registro local salvo no navegador.`;
}

function setPendingState() {
  statusCards.forEach((card) => {
    card.classList.add("is-pending");
    card.classList.remove("is-ok");
  });
}

function writeEnvironmentLog() {
  const now = new Date();
  const timestamp = now.toLocaleString("pt-BR");

  localStorage.setItem(storageKey, timestamp);
  setValidatedState(timestamp);
}

const lastValidation = localStorage.getItem(storageKey);

if (lastValidation) {
  setValidatedState(lastValidation);
} else {
  setPendingState();
}

validateButton.addEventListener("click", writeEnvironmentLog);
