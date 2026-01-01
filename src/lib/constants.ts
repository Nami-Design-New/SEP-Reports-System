export const hydraulicItems = [
  {
    key: "systemPipe",
    label: "Hydraulic system pipes",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "hoseConnections",
    label: "Hose connections",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "drivingMechanism",
    label: "Driving mechanism",
    hasInputField: false,
    inputKey: null,
  },
  { key: "values", label: "Valves", hasInputField: false, inputKey: null },
];

export const hydraulicCheckItems = [
  { key: "oilLevel", label: "Oil level", hasInputField: false, inputKey: null },
  {
    key: "oilCondition",
    label: "Oil Condition",
    hasInputField: false,
    inputKey: null,
  },
];

export const gisRecordReadings = [
  {
    key: "sf6Pressure",
    label: "SF6 pressure/density for all compartments",
    hasInputField: true,
    inputKey: "sf6PressureInput",
  },
  {
    key: "sf6Moisture",
    label: "SF6 moisture (dew point ≤ -35 °C or as recommended)",
    hasInputField: true,
    inputKey: "sf6MoistureInput",
  },
  {
    key: "sf6Percentage",
    label: "SF6 percentage (≥ 97% or as recommended)",
    hasInputField: true,
    inputKey: "sf6PercentageInput",
  },
  {
    key: "so2Content",
    label: "SO₂ content and decomposition (0–12 ppmv)",
    hasInputField: true,
    inputKey: "so2ContentInput",
  },
];

export const gisCheckFor = [
  {
    key: "sf6Alarms",
    label: "SF6 alarms (1st and 2nd stage)",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "gasLeaks",
    label: "Gas leaks using a gas tester",
    hasInputField: false,
    inputKey: null,
  },
];

export const springBreakerItems = [
  {
    key: "springCondition",
    label: "Motor and spring condition",
    showWarningOnNo: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "chargingCurrent",
    label: "Motor charging current",
    hasInputField: true,
    inputKey: "chargingCurrentInput",
    inputPlaceholder: "enter number charging current",
  },
  {
    key: "chargingTime",
    label: "Motor charging time",
    hasInputField: true,
    inputKey: "chargingTimeInput",
    inputPlaceholder: "enter number charging time",
  },
];

export const combinedVisualInspection = [
  {
    key: "visualInspection",
    label: "Perform a visual inspection",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    // secondLabel:'test'
  },
  {
    key: "operatingLevel",
    label: "Operating level",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Inspect and lubricate",
  },
  {
    key: "spindle",
    label: "Cogwheel and spindle",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "couplingLinkage",
    label: "Coupling linkage",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },

  {
    key: "mechanicalIndication",
    label: "Mechanical indication",
    hasInputField: false,
    inputKey: null,
    firstLabel: "Check",
  },
  {
    key: "manualOperation",
    label: "Manual operation",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "interlockSystem",
    label: "Interlock system",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "terminalTightness",
    label: "Terminal tightness",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "dsContacts",
    label: "DS contacts (outdoor)",
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "currentTest",
    label: "Current during opening and closing",
    hasInputField: true,
    inputKey: "currentValue",
    inputPlaceholder: "enter current value",
    firstLabel: "Test motor running",
  },
  {
    key: "timeTest",
    label: "Time during opening and closing",
    hasInputField: true,
    inputKey: "timeValue",
    inputPlaceholder: "enter time value",
  },
];

// export const inspectAndLubricateItems = [
//   {
//     key: "operatingLevel",
//     label: "Operating level",
//     showWarningOnYes: true,
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "spindle",
//     label: "Cogwheel and spindle",
//     showWarningOnYes: true,
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "couplingLinkage",
//     label: "Coupling linkage",
//     showWarningOnYes: true,
//     hasInputField: false,
//     inputKey: null,
//   },
// ];

// export const combinedCheckItems = [
//   {
//     key: "mechanicalIndication",
//     label: "Mechanical indication",
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "manualOperation",
//     label: "Manual operation",
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "interlockSystem",
//     label: "Interlock system",
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "terminalTightness",
//     label: "Terminal tightness",
//     hasInputField: false,
//     inputKey: null,
//   },
//   {
//     key: "dsContacts",
//     label: "DS contacts (outdoor)",
//     hasInputField: false,
//     inputKey: null,
//   },
// ];

// export const motorRunningTests = [
//   {
//     key: "currentTest",
//     label: "Current during opening and closing",
//     hasInputField: true,
//     inputKey: "currentValue",
//     inputPlaceholder: "enter current value",
//   },
//   {
//     key: "timeTest",
//     label: "Time during opening and closing",
//     hasInputField: true,
//     inputKey: "timeValue",
//     inputPlaceholder: "enter time value",
//   },
// ];

export const visualAndPhysicalInspection = [
  {
    key: "rustAndCorrosion",
    label: "Rust and corrosion",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Visual and Physical Inspection",
    secondLabel: "Structural Components",
  },
  {
    key: "oilLeaksFromFittings",
    label: "Oil leaks from fittings, accessories, or tanks",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "inspectionOfSilica",
    label: "Inspection of silica gel and conservator oil levels",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "lowVoltage",
    label: "Low Voltage (LV), High Voltage (HV), and Neutral bushings",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    secondLabel: "Bushings",
  },
  {
    key: "radiatorsTanks",
    label: "Radiators, tanks, pipes, flanges, valves, and gaskets",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    secondLabel: "Radiator and Tank Components",
  },
  {
    key: "oilPumps",
    label: "Oil pumps (if installed)",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "buchholzRelays",
    label: "Buchholz relays",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    secondLabel: "Protective Devices",
  },
  {
    key: "pressureRelief",
    label: "Pressure relief devices",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "oilAndWinding",
    label: "Oil and winding temperature indicators",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "surgeArrestors",
    label: "Surge arrestors (if installed)",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "inspectAndTestAll",
    label: "Inspect and test all valves for proper open/close operations",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Valve Operations",
  },
  {
    key: "performInspection",
    label:
      "Perform inspection and functional tests on control and cooling systems",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Control and Cooling System",
  },
  {
    key: "dissolvedGasAnalysis",
    label: "Dissolved Gas Analysis (DGA)",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Oil Testing and Inspection",
  },
  {
    key: "furanAnalysis",
    label: "Furan Analysis",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "betweenCoreWindings",
    label: "Between core and windings",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Electrical Testing",
    secondLabel: "Insulation Resistance (Megger) Tests",
  },
  {
    key: "betweenWindings",
    label: "Between windings",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "BetweenWindingsAndGround",
    label: "Between windings and ground",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "TanCapacitanceMeasurement",
    label: "TanΔ and capacitance measurement",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    secondLabel: "Other Tests",
  },
  {
    key: "excitationTest",
    label: "Excitation test",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "windingResistance",
    label: "Winding resistance measurement",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "shortCircuitImpedance",
    label: "Short circuit impedance measurement",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "currentTransformer",
    label: "Current Transformer (C.T.) testing",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "voltageRatioMeasurement",
    label: "Voltage ratio measurement",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "inspectBuchholzRelays",
    label:
      "Inspect and test Buchholz relays, pressure relief devices, and temperature sensors",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
  {
    key: "cleanBushingsRadiators",
    label:
      "Clean bushings, radiators, and other exposed components to prevent contamination",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
    firstLabel: "Transformer Cleaning and Cooling System Maintenance",
  },
  {
    key: "testMaintainCooling",
    label:
      "Test and maintain cooling system performance, including fans and oil pumps",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
  },
];
