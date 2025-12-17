export const hydraulicItems = [
  { key: "systemPipe", label: "Hydraulic system pipes" },
  { key: "hoseConnections", label: "Hose connections" },
  { key: "drivingMechanism", label: "Driving mechanism" },
  { key: "values", label: "Valves" },
];

export const hydraulicCheckItems = [
  { key: "oilLevel", label: "Oil level" },
  { key: "oilCondition", label: "Oil Condition" },
];

export const gisRecordReadings = [
  {
    key: "sf6Pressure",
    label: "SF6 pressure/density for all compartments",
    hasInputField: true,
  },
  {
    key: "sf6Moisture",
    label: "SF6 moisture (dew point ≤ -35 °C or as recommended)",
    hasInputField: true,
  },
  {
    key: "sf6Percentage",
    label: "SF6 percentage (≥ 97% or as recommended)",
    hasInputField: true,
  },
  {
    key: "so2Content",
    label: "SO₂ content and decomposition (0–12 ppmv)",
    hasInputField: true,
  },
];

export const gisCheckFor = [
  {
    key: "sf6Alarms",
    label: "SF6 alarms (1st and 2nd stage)",
  },
  {
    key: "gasLeaks",
    label: "Gas leaks using a gas tester",
  },
];

export const springBreakerItems = [
  {
    key: "springCondition",
    label: "Motor and spring condition",
    showWarningOnNo: true,
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
  },
];

export const inspectAndLubricateItems = [
  {
    key: "operatingLevel",
    label: "Operating level",
    showWarningOnYes: true,
    hasInputField: false,
  },
  {
    key: "spindle",
    label: "Cogwheel and spindle",
    showWarningOnYes: true,
    hasInputField: false,
  },
  {
    key: "couplingLinkage",
    label: "Coupling linkage",
    showWarningOnYes: true,
    hasInputField: false,
  },
];

export const combinedCheckItems = [
  {
    key: "mechanicalIndication",
    label: "Mechanical indication",
    hasInputField: false,
  },
  { key: "manualOperation", label: "Manual operation", hasInputField: false },
  { key: "interlockSystem", label: "Interlock system", hasInputField: false },
  {
    key: "terminalTightness",
    label: "Terminal tightness",
    hasInputField: false,
  },
  { key: "dsContacts", label: "DS contacts (outdoor)", hasInputField: false },
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
