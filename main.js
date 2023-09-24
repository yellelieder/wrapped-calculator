let numEmails = document.getElementById("numEmails");
let sizeKB = document.getElementById("sizeKB");
let sizeMB = document.getElementById("sizeMB");
let sizeGB = document.getElementById("sizeGB");
let sizeTB = document.getElementById("sizeTB");
let gridFactor = document.getElementById("gridFactor");
let result = document.getElementById("result");
let dataTransmission = document.getElementById("data-transmission");
let energyConsumption = document.getElementById("energy-consumption");
let trees = document.getElementById("trees");
let cost = document.getElementById("cost");
let damage = document.getElementById("damage");

function calculateResult() {
  let sumInGB = Number(numEmails.value) * convertToGB(Number(sizeKB.value));
  let dataTransmissionValue = sumInGB.toFixed(3);
  let energyConsumptionValue = (sumInGB * 0.5).toFixed(2);

  let finalResult = (sumInGB * 0.5 * Number(gridFactor.value)) / 1000;
  let treesNeeded = finalResult / 25;
  let costToOffset = finalResult * 0.089;
  let costOfDamage = finalResult * 0.809;

  let resultUnit = "kg";
  let treesUnit = "trees";
  let costUnit = "Euro";

  if (finalResult < 1) {
    finalResult *= 1000;
    resultUnit = "g";
  } else if (finalResult >= 1000) {
    finalResult /= 1000;
    resultUnit = "t";
  }

  result.textContent =
    "Total emissions: " + finalResult.toFixed(2) + " " + resultUnit + " CO2e";
  dataTransmission.textContent =
    "Data transmission: " + dataTransmissionValue + " GB";
  energyConsumption.textContent =
    "Energy consumption: " + energyConsumptionValue + " kWh";
  trees.textContent =
    "Number of trees to offset in one year: " + Math.ceil(treesNeeded);
  cost.textContent =
    "Cost to offset with carbon certificates: " +
    (Math.ceil(costToOffset * 100) / 100).toFixed(2) +
    " Euro";
  damage.textContent =
    "Welfare losses from environmental damage: " +
    costOfDamage.toFixed(2) +
    " Euro";
}

function convertToKB(value) {
  return value;
}

function convertToMB(value) {
  return value / 1024;
}

function convertToGB(value) {
  return value / (1024 * 1024);
}

function convertToTB(value) {
  return value / (1024 * 1024 * 1024);
}

function convertToKB(value) {
  return value;
}

function convertToMB(value) {
  return value / 1024;
}

function convertToGB(value) {
  return value / (1024 * 1024);
}

sizeKB.addEventListener("input", function () {
  sizeMB.value = convertToMB(Number(sizeKB.value));
  sizeGB.value = convertToGB(Number(sizeKB.value));
  sizeTB.value = convertToTB(Number(sizeKB.value));
  calculateResult();
});

sizeMB.addEventListener("input", function () {
  sizeKB.value = convertToKB(Number(sizeMB.value * 1024));
  sizeGB.value = convertToGB(Number(sizeMB.value * 1024));
  sizeTB.value = convertToTB(Number(sizeMB.value * 1024));
  calculateResult();
});

sizeGB.addEventListener("input", function () {
  sizeKB.value = convertToKB(Number(sizeGB.value * 1024 * 1024));
  sizeMB.value = convertToMB(Number(sizeGB.value * 1024 * 1024));
  sizeTB.value = convertToTB(Number(sizeGB.value * 1024 * 1024));
  calculateResult();
});

sizeTB.addEventListener("input", function () {
  sizeKB.value = convertToKB(Number(sizeTB.value * 1024 * 1024 * 1024));
  sizeMB.value = convertToMB(Number(sizeTB.value * 1024 * 1024 * 1024));
  sizeGB.value = convertToGB(Number(sizeTB.value * 1024 * 1024 * 1024));
  calculateResult();
});

numEmails.addEventListener("input", calculateResult);
sizeKB.addEventListener("input", calculateResult);
gridFactor.addEventListener("input", calculateResult);
calculateResult();

const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
  const tooltipText = tooltip.querySelector(".tooltip-text");
  const tooltipIcon = tooltip.querySelector(".tooltip-icon");

  tooltipIcon.addEventListener("click", () => {
    tooltip.classList.toggle("active");
  });

  tooltipText.addEventListener("click", () => {
    tooltip.classList.toggle("active");
  });
});

function toggleContent() {
  var content = document.getElementById("disclaimerContent");
  content.classList.toggle("show");
}
