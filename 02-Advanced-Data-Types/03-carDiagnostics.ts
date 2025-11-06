function carDiagnostics(
  carBody: { material: string; state: string } & {
    partName: string;
    runDiagnostics(): string;
  },
  tires: { airPressure: number; condition: string } & {
    partName: string;
    runDiagnostics(): string;
  },
  engine: { horsepower: number; oilDensity: number } & {
    partName: string;
    runDiagnostics(): string;
  }
) {
  console.log(carBody.runDiagnostics());
  console.log(tires.runDiagnostics());
  console.log(engine.runDiagnostics());
}

function runDiagnostics(this: { partName: string }) {
  return this.partName;
}

carDiagnostics(
  {
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics,
  },

  {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics,
  },

  {
    horsepower: 300,
    oilDensity: 780,
    partName: "Engine",
    runDiagnostics,
  }
);
