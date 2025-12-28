export const hydraulicItems = [
  { key: "systemPipe", label: "Hydraulic system pipes", hasInputField: false, inputKey: null },
  { key: "hoseConnections", label: "Hose connections", hasInputField: false, inputKey: null },
  { key: "drivingMechanism", label: "Driving mechanism", hasInputField: false, inputKey: null },
  { key: "values", label: "Valves", hasInputField: false, inputKey: null },
];

export const hydraulicCheckItems = [
  { key: "oilLevel", label: "Oil level", hasInputField: false, inputKey: null },
  { key: "oilCondition", label: "Oil Condition", hasInputField: false, inputKey: null },
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
  },
];

export const inspectAndLubricateItems = [
  {
    key: "operatingLevel",
    label: "Operating level",
    showWarningOnYes: true,
    hasInputField: false,
    inputKey: null,
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
];

export const combinedCheckItems = [
  {
    key: "mechanicalIndication",
    label: "Mechanical indication",
    hasInputField: false,
    inputKey: null,
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
];

export const motorRunningTests = [
  {
    key: "currentTest",
    label: "Current during opening and closing",
    hasInputField: true,
    inputKey: "currentValue",
    inputPlaceholder: "enter current value",
  },
  {
    key: "timeTest",
    label: "Time during opening and closing",
    hasInputField: true,
    inputKey: "timeValue",
    inputPlaceholder: "enter time value",
  },
];
