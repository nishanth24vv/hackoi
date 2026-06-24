const climateCells = Array.from({ length: 64 }, (_, index) => ({
  rainfall: Math.round(35 + Math.sin(index * 0.7) * 24 + (index % 7) * 7),
  temperature: Number((29 + Math.cos(index * 0.43) * 3.8 + (index % 5) * 0.7).toFixed(1)),
  risk: Math.round(28 + Math.sin(index * 0.31) * 30 + (index % 4) * 9),
}));

const insights = [
  ["Monsoon surge detected", "Coastal Karnataka and Konkan cells show high rainfall anomaly with elevated runoff potential."],
  ["Heat pocket forming", "Interior plateau cells retain night-time warmth; livestock and urban health alerts should be monitored."],
  ["Model uncertainty low", "Ensemble spread is narrow because IMD gridded rainfall and INSAT cloud signals are aligned."],
  ["Reservoir opportunity", "Western catchments show favorable inflow probability for managed storage operations."],
];

const map = document.querySelector("#climateMap");
const layerSelect = document.querySelector("#layerSelect");
const rainSlider = document.querySelector("#rainSlider");
const tempSlider = document.querySelector("#tempSlider");
const runSimulation = document.querySelector("#runSimulation");
const resetScenario = document.querySelector("#resetScenario");

function colorFor(value, layer) {
  const normalized = layer === "temperature" ? (value - 25) / 11 : value / 100;
  if (normalized > 0.72) return "linear-gradient(135deg, #ff6b7a, #ff9f43)";
  if (normalized > 0.47) return "linear-gradient(135deg, #ffcb5b, #ffec99)";
  return "linear-gradient(135deg, #61f2a6, #4ce0ff)";
}

function renderMap() {
  const layer = layerSelect.value;
  map.innerHTML = climateCells.map((cell, index) => {
    const value = cell[layer];
    const label = layer === "temperature" ? `${value}°C` : `${value}%`;
    return `<button class="cell" title="Grid ${index + 1}: ${label}" style="background:${colorFor(value, layer)}" aria-label="Climate grid ${index + 1}, ${layer} ${label}"></button>`;
  }).join("");
}

function renderInsights() {
  document.querySelector("#insightList").innerHTML = insights.map(([title, copy]) => `
    <article class="insight"><strong>${title}</strong><p>${copy}</p></article>
  `).join("");
}

function updateScenario() {
  const rainfallChange = Number(rainSlider.value);
  const tempChange = Number(tempSlider.value) / 10;
  document.querySelector("#rainOutput").textContent = `${rainfallChange >= 0 ? "+" : ""}${rainfallChange}%`;
  document.querySelector("#tempOutput").textContent = `${tempChange >= 0 ? "+" : ""}${tempChange.toFixed(1)}°C`;

  const cropRisk = rainfallChange < -25 || tempChange > 2.5 ? "Severe" : rainfallChange < -10 || tempChange > 1.2 ? "Elevated" : "Stable";
  const reservoir = rainfallChange > 35 ? "Flood Ops" : rainfallChange > 12 ? "Surplus" : rainfallChange < -20 ? "Deficit" : "Normal";
  const heat = tempChange > 3 ? "Red Alert" : tempChange > 1.5 ? "Orange" : "Watch";

  document.querySelector("#cropStress").textContent = cropRisk;
  document.querySelector("#reservoirImpact").textContent = reservoir;
  document.querySelector("#heatAlert").textContent = heat;
  document.querySelector("#riskMetric").textContent = cropRisk === "Severe" || heat === "Red Alert" ? "High" : "Moderate";
}

function simulateForecast() {
  runSimulation.disabled = true;
  document.querySelector("#simulationStatus").textContent = "Assimilating IMD + INSAT frames...";
  setTimeout(() => {
    const rainfall = 78 + Math.round(Math.random() * 22);
    const temp = (33.2 + Math.random() * 2.8).toFixed(1);
    const confidence = 88 + Math.round(Math.random() * 8);
    document.querySelector("#rainMetric").textContent = `${rainfall} mm`;
    document.querySelector("#tempMetric").textContent = `${temp}°C`;
    document.querySelector("#confidenceMetric").textContent = `${confidence}%`;
    document.querySelector("#simulationStatus").textContent = "7-day forecast generated with ensemble uncertainty bands";
    runSimulation.disabled = false;
  }, 900);
}

layerSelect.addEventListener("change", renderMap);
rainSlider.addEventListener("input", updateScenario);
tempSlider.addEventListener("input", updateScenario);
runSimulation.addEventListener("click", simulateForecast);
resetScenario.addEventListener("click", () => { rainSlider.value = 0; tempSlider.value = 0; updateScenario(); });

renderMap();
renderInsights();
updateScenario();
