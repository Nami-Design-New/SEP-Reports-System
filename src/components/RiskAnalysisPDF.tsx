import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RiskAnalysisPDF({ report }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");

  const riskData = [
    { conditionScore: 75, importanceScore: 98, name: "GIS" },
    { conditionScore: 80, importanceScore: 95, name: "Transformer" },
  ];

  const riskPriority = [
    { rank: 1, name: "GIS (Gas Insulated Switchgear)", score: 71.25 },
    { rank: 2, name: "Transformer", score: 83.2 },
  ];

  const components = [
    {
      id: 1,
      name: "GIS (Gas Insulated Switchgear)",
      model: "ABB - ELK14",
      risk: 71.25,
      serial: "GIS-2019-001",
      year: 2019,
      condition: 75,
      importance: 95,
      findings: t("riskAnalysis.gisFindings"),
      recommendations: [
        t("riskAnalysis.annualInspections"),
        t("riskAnalysis.continuousMonitoring"),
      ],
    },
    {
      id: 2,
      name: "Transformer",
      model: "Siemens - GEAFOL",
      risk: 83.7,
      serial: "TRF-2018-045",
      year: 2018,
      condition: 65,
      importance: 98,
      findings: t("riskAnalysis.transformerFindings"),
      recommendations: [
        t("riskAnalysis.monthlyMonitoring"),
        t("riskAnalysis.acceleratedMaintenance"),
      ],
    },
  ];

  const getRiskColor = (score) => {
    if (score >= 80) return "bg-red-100 text-red-800 hover:bg-red-100";
    if (score >= 70) return "bg-orange-100 text-orange-800 hover:bg-orange-100";
    return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
  };

  const getRiskBadgeColor = (score) => {
    if (score >= 80) return "bg-red-500";
    if (score >= 70) return "bg-orange-500";
    return "bg-yellow-500";
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto space-y-6 px-7">
        {/* Detailed Components Assessment */}
        <div>
          <h2 className="text-xl font-bold text-[#0d5c87] mb-2 py-2">
            {t("riskAnalysis.detailedComponentsAssessment")}
          </h2>
          <div className="space-y-4">
            {components.map((component) => (
              <Card key={component.id} className="p-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">
                        {component.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        {component.model}
                      </p>
                    </div>
                    <Badge
                      className={`${getRiskBadgeColor(
                        component.risk
                      )} hover:opacity-90`}
                    >
                      {t("riskAnalysis.risk")}: {component.risk.toFixed(2)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Component Details Grid */}
                  <div className="grid grid-cols-4 gap-4 py-4 ">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        {t("riskAnalysis.serialNumber")}
                      </p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {component.serial}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        {t("riskAnalysis.manufacturingYear")}
                      </p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {component.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        {t("riskAnalysis.condition")}
                      </p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {component.condition}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        {t("riskAnalysis.importance")}
                      </p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {component.importance}%
                      </p>
                    </div>
                  </div>

                  {/* Findings */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 my-2">
                      {t("riskAnalysis.findings")}:
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {component.findings}
                    </p>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 my-2">
                      {t("riskAnalysis.recommendations")}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {component.recommendations.map((rec, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="border border-gray-400  bg-transparent px-2"
                        >
                          {rec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#0d5c87] py-2">
            {t("riskAnalysis.riskAnalysis")}
          </h1>
        </div>

        {/* Risk Priority List */}
        <Card className="border-none border-b rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              {t("riskAnalysis.riskPriorityList")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {riskPriority.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-gray-600">
                      #{item.rank}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  <Badge
                    className={`${getRiskBadgeColor(
                      item.score
                    )} hover:opacity-90`}
                  >
                    {item.score.toFixed(2)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Matrix */}
        <Card className="border-none border-b rounded-none">
          <CardHeader>
            <CardTitle className="text-lg px-4 ">
              {t("riskAnalysis.riskMatrix")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    type="number"
                    dataKey="conditionScore"
                    name={t("riskAnalysis.conditionScore")}
                    domain={[0, 100]}
                    label={{
                      value: t("riskAnalysis.conditionScore"),
                      position: "insideBottomRight",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    type="number"
                    dataKey="importanceScore"
                    name={t("riskAnalysis.importanceScore")}
                    domain={[0, 100]}
                    label={{
                      value: t("riskAnalysis.importanceScore"),
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    }}
                    formatter={(value) =>
                      typeof value === "number" ? value.toFixed(0) : value
                    }
                  />
                  <Scatter name="Components" data={riskData} fill="#f97316" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* General Recommendations */}
        <Card className=" border-none border-b ">
          <CardHeader>
            <CardTitle className="text-lg text-[#1c6891]">
              {t("riskAnalysis.generalRecommendations")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-800">
              {t("riskAnalysis.generalRecommendationsText")}
            </p>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="border-none border-b rounded-none">
          <CardHeader>
            <CardTitle className="text-lg text-[#1c6891]">
              {t("riskAnalysis.additionalNotes")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              {report?.step8?.descriptionField || "-"}
            </p>
          </CardContent>
        </Card>

        {/* Signatures */}
        <Card className="border-none border-b rounded-none">
          <CardHeader>
            <CardTitle className="text-lg text-[#1c6891]">
              {t("riskAnalysis.signatures")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase mb-4">
                  {t("riskAnalysis.responsibleEngineer")}
                </p>
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-sm font-medium text-gray-900">
                    {report?.engineer || "-"}
                  </p>
                  <p className="text-xs text-gray-600">
                    {report?.createdDate || "2025-10-20"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase mb-4">
                  {t("riskAnalysis.reviewer")}
                </p>
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-sm font-medium text-gray-900">
                    {report?.reviewer || "-"}
                  </p>
                  <p className="text-xs text-gray-600">
                    {report?.reviewDate || "2025-10-20"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}