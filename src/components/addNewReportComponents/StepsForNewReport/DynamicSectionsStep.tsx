import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import FileUploader from "../FileUploader";
import ConditionGrid from "../ConditionGrid";
import { RadioButtonGroup } from "@/components/addNewReportComponents/RadioButtonGroup";
import { useState } from "react";
import {
  combinedCheckItems,
  combinedVisualInspection,
  gisCheckFor,
  gisRecordReadings,
  hydraulicCheckItems,
  hydraulicItems,
  inspectAndLubricateItems,
  motorRunningTests,
  springBreakerItems,
} from "@/lib/constants";
import GisSwitchGearsComponent from "./GisSwitchGearsComponent";

interface DynamicStepsComponentProps {
  stepKey: string;
  sections: string[];
  formData;
  handleInputChange: (sectionKey: string, field: string, value) => void;
  setFilesData: (fn: (prev: any) => any) => void;
  setConditionGridData: (fn: (prev: any) => any) => void;
  openAddModal: () => void;
  translationPrefix: string;
}

export default function DynamicStepsComponent({
  stepKey,
  sections,
  formData,
  handleInputChange,
  setFilesData,
  setConditionGridData,
  openAddModal,
  translationPrefix,
}: DynamicStepsComponentProps) {
  const { t } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState(null);
  // console.log("active accordion", activeAccordion, sections);

  return (
    <Card className="py-8">
      <CardContent className="space-y-6">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2"
          onValueChange={(value) => {
            setActiveAccordion(value);
            console.log("Selected accordion:", value);
          }}
        >
          {sections.map((sectionKey) => (
            <AccordionItem
              key={sectionKey}
              value={sectionKey}
              className={`border rounded-lg px-4 transition-colors
            ${
              activeAccordion === sectionKey
                ? "bg-background"
                : "bg-[#0d5c8710]"
            }
            `}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-bold text-[#0d5c87]">
                    {t(sectionKey)}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="space-y-4 p-3">
                {/* Single Line Diagram */}
                <div className="space-y-4 ">
                  <div className="grid grid-cols-1  gap-4">
                    <FileUploader
                      addFileName=" Single Line Diagram (SLD)"
                      onFilesChange={(files) => {
                        setFilesData((prev) => ({
                          ...prev,
                          [`${sectionKey}_uploadDocument`]: files,
                        }));
                      }}
                    />
                  </div>
                </div>
                {/* Manufacturer */}
                <div className="space-y-2">
                  <Label>{t(`${translationPrefix}.manufacturer`)}</Label>
                  <div className="flex justify-between items-center gap-8">
                    <Input
                      value={
                        formData[stepKey]?.[sectionKey]?.manufacturer || ""
                      }
                      onChange={(e) =>
                        handleInputChange(
                          sectionKey,
                          "manufacturer",
                          e.target.value
                        )
                      }
                      placeholder={t(
                        `${translationPrefix}.manufacturerPlaceholder`
                      )}
                    />{" "}
                    <Input
                      value={
                        formData[stepKey]?.[sectionKey]?.manufacturerType || ""
                      }
                      onChange={(e) =>
                        handleInputChange(
                          sectionKey,
                          "manufacturerType",
                          e.target.value
                        )
                      }
                      placeholder={t(`Enter type`)}
                    />{" "}
                    <Input
                      value={
                        formData[stepKey]?.[sectionKey]?.manufacturerTest || ""
                      }
                      onChange={(e) =>
                        handleInputChange(
                          sectionKey,
                          "manufacturerTest",
                          e.target.value
                        )
                      }
                      placeholder={t(
                        `${translationPrefix}.manufacturerPlaceholder`
                      )}
                    />{" "}
                  </div>
                </div>

                {/* Operational Condition & Test Results */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-[#0d5c87]">
                    {t("newReport.primaryGIS.operationalCondition")}
                    <br />
                  </h3>
                  <div className="grid grid-cols-1  gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`numOperations-${sectionKey}`}>
                        {t("newReport.primaryGIS.numberOfOperations")}
                      </Label>
                      <Input
                        id={`numOperations-${sectionKey}`}
                        type="number"
                        value={
                          formData[stepKey]?.[sectionKey]?.numOperations || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "numOperations",
                            e.target.value
                          )
                        }
                        placeholder="0"
                      />
                    </div>
                    {/* <div className="space-y-2">
                      <Label htmlFor={`ratedValues-${sectionKey}`}>
                        {t("newReport.primaryGIS.ratedValues")}
                      </Label>
                      <Input
                        id={`ratedValues-${sectionKey}`}
                        value={
                          formData[stepKey]?.[sectionKey]?.ratedValues || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "ratedValues",
                            e.target.value
                          )
                        }
                        placeholder={t(
                          "newReport.primaryGIS.ratedValuesPlaceholder"
                        )}
                      />
                    </div> */}
                    <div className="space-y-2">
                      <Label htmlFor={`thermography-${sectionKey}`}>
                        {t("newReport.primaryGIS.thermography")}
                      </Label>
                      <Input
                        id={`thermography-${sectionKey}`}
                        value={
                          formData[stepKey]?.[sectionKey]?.thermography || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "thermography",
                            e.target.value
                          )
                        }
                        placeholder={t("newReport.primaryGIS.writeHere")}
                      />
                    </div>
                  </div>
                </div>
                {/* Visual Condition */}
                <FileUploader
                  addFileName={t("newReport.primaryGIS.visualCondition")}
                  onFilesChange={(files) =>
                    setFilesData((prev) => ({
                      ...prev,
                      [`${sectionKey}_visualCondition`]: files,
                    }))
                  }
                />

                {/* Maintenance History */}
                <div className="space-y-4 ">
                  <h3 className="font-semibold text-lg text-[#0d5c87]">
                    {t("newReport.primaryGIS.maintenanceHistory")}
                  </h3>
                  <div className="grid grid-cols-1  gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`maintenanceDate-${sectionKey}`}>
                        {t("newReport.primaryGIS.localMaintenanceDate")}
                      </Label>
                      <Input
                        id={`maintenanceDate-${sectionKey}`}
                        type="date"
                        value={
                          formData[stepKey]?.[sectionKey]?.maintenanceDate || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "maintenanceDate",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`maintenanceType-${sectionKey}`}>
                        Record the hydraulic counter reading
                      </Label>
                      <Input
                        id={`maintenanceType-${sectionKey}`}
                        value={
                          formData[stepKey]?.[sectionKey]?.maintenanceType || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "maintenanceType",
                            e.target.value
                          )
                        }
                        type="number"
                        placeholder={t("newReport.primaryGIS.typePlaceholder")}
                      />
                    </div>

                    <h3 className="font-semibold text-lg">Inspect</h3>
                    <div className="space-y-2 flex justify-between items-center">
                      <Label>
                        {t("newReport.primaryGIS.sparePartsAvailability")}
                      </Label>
                      <div className="flex gap-4 mt-2">
                        <RadioButtonGroup
                          options={[
                            { label: t("common.yes"), value: "yes" },
                            { label: t("common.no"), value: "no" },
                          ]}
                          value={formData[stepKey]?.[sectionKey]?.spareParts}
                          onChange={(value) =>
                            handleInputChange(sectionKey, "spareParts", value)
                          }
                          name={`spareParts-${sectionKey}`}
                        />
                      </div>
                    </div>
                    {formData[stepKey]?.[sectionKey]?.spareParts === "no" && (
                      <p className="text-sm text-red-600 mt-1 bg-yellow-100 p-4">
                        If not OK, mentioned corrective maintenance required
                      </p>
                    )}
                    {activeAccordion === "GIS Switch Gears" && (
                      <>
                        <h3 className="font-semibold text-lg">
                          Record readings for
                        </h3>

                        {[
                          "SF6 pressure/density for all compartments",
                          "SF6 moisture (dew point ≤ -35 °C or as recommended)",
                          "SF6 percentage (≥ 97% or as recommended)",
                          "SO₂ content and decomposition (0–12 ppmv)",
                        ].map((item) => (
                          <>
                            <div
                              key={item}
                              className="space-y-2 flex justify-between items-center"
                            >
                              <Label>{item}</Label>
                              <div className="flex gap-4 mt-2">
                                <RadioButtonGroup
                                  options={[
                                    { label: t("common.yes"), value: "yes" },
                                    { label: t("common.no"), value: "no" },
                                  ]}
                                  value={
                                    formData[stepKey]?.[sectionKey]?.[item] ||
                                    "no"
                                  }
                                  onChange={(value) =>
                                    handleInputChange(sectionKey, item, value)
                                  }
                                  name={`${item}-${sectionKey}`}
                                />
                              </div>
                            </div>
                            {formData[stepKey]?.[sectionKey]?.[item] ===
                              "yes" && (
                              <div className="space-y-2">
                                <Input
                                  id={`chargingCurrentInput-${item}`}
                                  value={
                                    formData[stepKey]?.[item]
                                      ?.chargingCurrentInput || ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      item,
                                      "chargingCurrentInput",
                                      e.target.value
                                    )
                                  }
                                  type="number"
                                  placeholder="enter number charging current"
                                />
                              </div>
                            )}
                          </>
                        ))}
                        {/* ⦁ Check for */}
                        <h3 className="font-semibold text-lg">Check for</h3>

                        {[
                          "SF6 alarms (1st and 2nd stage)",
                          "Gas leaks using a gas tester",
                        ].map((item) => (
                          <>
                            <div
                              key={item}
                              className="space-y-2 flex justify-between items-center"
                            >
                              <Label>{item}</Label>
                              <div className="flex gap-4 mt-2">
                                <RadioButtonGroup
                                  options={[
                                    { label: t("common.yes"), value: "yes" },
                                    { label: t("common.no"), value: "no" },
                                  ]}
                                  value={
                                    formData[stepKey]?.[sectionKey]?.[item] ||
                                    "no"
                                  }
                                  onChange={(value) =>
                                    handleInputChange(sectionKey, item, value)
                                  }
                                  name={`${item}-${sectionKey}`}
                                />
                              </div>
                            </div>
                            {formData[stepKey]?.[sectionKey]?.[item] ===
                              "no" && (
                              <p className="text-sm text-red-600 mt-1 bg-yellow-100 p-4">
                                If not OK, mentioned corrective maintenance
                                required
                              </p>
                            )}
                          </>
                        ))}
                      </>
                    )}

                    {activeAccordion === "Circuit Breakers (Hydraulic)" && (
                      <>
                        {hydraulicItems.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}

                        <h3 className="font-semibold text-lg">Check</h3>

                        {hydraulicCheckItems.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}
                      </>
                    )}

                    {activeAccordion === "Circuit Breakers (Spring)" && (
                      <>
                        {springBreakerItems.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            hasInputField={item.hasInputField}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}
                      </>
                    )}

                    {activeAccordion ===
                      "Combined Disconnect/Ground Switches" && (
                      <>
                        {combinedVisualInspection.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            hasInputField={item.hasInputField}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}

                        <h3 className="font-semibold text-lg">
                          Inspect and lubricate
                        </h3>

                        {inspectAndLubricateItems.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            hasInputField={item.hasInputField}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}

                        <h3 className="font-semibold text-lg">Check</h3>

                        {combinedCheckItems.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            hasInputField={item.hasInputField}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}

                        <h3 className="font-semibold text-lg">
                          Test motor running
                        </h3>

                        {motorRunningTests.map((item) => (
                          <GisSwitchGearsComponent
                            key={item.key}
                            itemKey={item.key}
                            label={item.label}
                            hasInputField={item.hasInputField}
                            formData={formData}
                            stepKey={stepKey}
                            sectionKey={sectionKey}
                            handleInputChange={handleInputChange}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div>
                  {/* Test Results */}
                  <h3 className="font-semibold text-lg text-[#0d5c87] mt-8">
                    {/* {t(`${translationPrefix}.testResults`)} */}
                  </h3>

                  {["testResults"].map((item) => (
                    <FileUploader
                      key={item}
                      addFileName={t(`newReport.primaryGIS.${item}`)}
                      onFilesChange={(files) =>
                        setFilesData((prev) => ({
                          ...prev,
                          [`${sectionKey}_${item.replace(/\s+/g, "_")}`]: files,
                        }))
                      }
                    />
                  ))}
                </div>

                {/* Assessment Condition */}
                <div className="space-y-4 ">
                  <h3 className="font-semibold text-lg text-[#0d5c87]">
                    {t("newReport.primaryGIS.assessmentCondition")}
                  </h3>
                  <div className="grid grid-cols-1  gap-4">
                    {/* assign condition wait.. */}
                    <ConditionGrid
                      onGridChange={(grid) =>
                        setConditionGridData((prev) => ({
                          ...prev,
                          [sectionKey]: grid,
                        }))
                      }
                    />
                    <div className="space-y-2">
                      <Label htmlFor={`assignCondition-${sectionKey}`}>
                        {t("newReport.primaryGIS.condition")}
                      </Label>
                      <Textarea
                        id={`assignCondition-${sectionKey}`}
                        value={
                          formData[stepKey]?.[sectionKey]?.assignCondition || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            sectionKey,
                            "assignCondition",
                            e.target.value
                          )
                        }
                        placeholder={t(
                          "newReport.primaryGIS.conditionPlaceholder"
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label>{t(`${translationPrefix}.description`)}</Label>
                  <Textarea
                    value={formData[stepKey]?.[sectionKey]?.description || ""}
                    onChange={(e) =>
                      handleInputChange(
                        sectionKey,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder={t(
                      `${translationPrefix}.descriptionPlaceholder`
                    )}
                  />
                </div>
                {/* Findings Conclusion */}
                <div className="space-y-2">
                  <Label>{t(`${translationPrefix}.findingsConclusion`)}</Label>
                  <Textarea
                    value={
                      formData[stepKey]?.[sectionKey]?.findingsConclusion || ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        sectionKey,
                        "findingsConclusion",
                        e.target.value
                      )
                    }
                  />
                </div>
                {/* Recommendations */}
                <div className="space-y-2">
                  <Label>{t(`${translationPrefix}.recommendations`)}</Label>
                  <Textarea
                    value={
                      formData[stepKey]?.[sectionKey]?.recommendations || ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        sectionKey,
                        "recommendations",
                        e.target.value
                      )
                    }
                    placeholder={t(
                      `${translationPrefix}.recommendationsPlaceholder`
                    )}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Button variant="secondary" onClick={openAddModal}>
          <Plus /> {t("newReport.primaryGIS.addNewSection")}
        </Button>
      </CardContent>
    </Card>
  );
}
