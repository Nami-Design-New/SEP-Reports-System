import { useTranslation } from "react-i18next";
import { RadioButtonGroup } from "../RadioButtonGroup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const GisSwitchGearsComponent = ({
  itemKey,
  label,
  formData,
  stepKey,
  handleInputChange,
  sectionKey,
  hasInputField = false,
  inputKey,
  firstLabel,
  secondLabel,
}) => {
  const { t } = useTranslation();

  const value = formData[stepKey]?.[sectionKey]?.[itemKey];

  return (
    <>
      {firstLabel && (
        <h1 className="text-lg font-semibold text-[#0d5c87]">{firstLabel}</h1>
      )}
      {secondLabel && (
        <h3 className="text-sm font-semibold text-[#3888b3] mx-2">{secondLabel}</h3>
      )}
      <div className="space-y-2 flex justify-between items-center">
        <Label className="mx-4">{label}</Label>
        <div className="flex gap-4 mt-2">
          <RadioButtonGroup
            options={[
              { label: t("common.yes"), value: "yes" },
              { label: t("common.no"), value: "no" },
            ]}
            value={value}
            onChange={(v) => handleInputChange(sectionKey, itemKey, v)}
            name={`${itemKey}-${sectionKey}`}
          />
        </div>
      </div>

      {value === "yes" && hasInputField && (
        <Input
          type="number"
          placeholder="enter number"
          value={formData[stepKey]?.[sectionKey]?.[inputKey] || ""}
          onChange={(e) =>
            handleInputChange(sectionKey, inputKey, e.target.value)
          }
        />
      )}

      {value === "no" && (
        <p className="text-sm text-red-600 mt-1 bg-yellow-100 p-4">
          corrective maintenance required
        </p>
      )}
    </>
  );
};
export default GisSwitchGearsComponent;
