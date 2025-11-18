import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import RiskAnalysisPDF from "@/components/RiskAnalysisPDF";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ModalImage from "@/components/ModalImage";

const ReportDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [report, setReport] = useState(null);
  const componentRef = useRef(null);
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const allReportsJson = localStorage.getItem("allReports");
    if (allReportsJson) {
      const allReports = JSON.parse(allReportsJson);
      const foundReport = allReports.find((r) => r.id == id);
      setReport(foundReport);
    }
  }, [id]);

  if (!report) {
    return (
      <div className="space-y-6">
        <Button
          onClick={() => navigate("/my-reports")}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("common.back")}
        </Button>
        <p className="text-muted-foreground">{t("common.notFound")}</p>
      </div>
    );
  }

  const handleDownloadPDF = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }
    pdf.save("report.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => navigate("/my-reports")}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("common.back")}
        </Button>
        <Button onClick={handleDownloadPDF} className="gap-2">
          <Download className="h-4 w-4" />
          {t("reportDetails.downloadPDF")}
        </Button>
      </div>

      <div className="space-y-6" ref={componentRef}>
        {/* Report Header */}
        <div className="bg-primary text-primary-foreground rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {t("reportDetails.technicalAssessmentReport")}
                </h1>
                <p className="text-primary-foreground/80">
                  {t("reportDetails.riskAssessmentReportAr")}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-foreground/80">
                {t("reportDetails.reportNumber")}
              </p>
              <p className="text-lg font-bold">{report?.reportNumber}</p>
              <p className="text-sm mt-2">
                {t("reportDetails.rev")} ({report?.revision || 1})
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Project Information */}
        <div className="bg-card border-b p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-xl font-bold">
              {t("reportDetails.projectInformation")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.projectName")}
              </p>
              <p className="font-medium">{report?.step1?.projectName || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.substationName")}
              </p>
              <p className="font-medium">
                {report?.step1?.substationName || "-"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.projectCode")}
              </p>
              <p className="font-medium">{report?.step1?.projectCode || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.owner")}
              </p>
              <p className="font-medium">{report?.step1?.owner || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.operationArea")}
              </p>
              <p className="font-medium">
                {report?.step1?.operationArea || "-"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.inspectionDate")}
              </p>
              <p className="font-medium">
                {report?.step1?.inspectionDate || "-"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.responsibleEngineer")}
              </p>
              <p className="font-medium">{report?.engineer || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {t("reportDetails.status")}
              </p>
              <Badge
                variant="default"
                className="bg-success text-success-foreground"
              >
                {report?.status || "-"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Step 2: Primary GIS Equipment */}
        {report?.step2 && Object.keys(report?.step2).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.primaryEquipmentGIS")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step2.map((section, idx: number) => (
                <div key={idx} className="bg-blue-200/20 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.gisSwitch")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.manufacturer")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.manufacturer || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.description")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.description || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.operationalCondition")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.condition || "-"}
                      </p>
                    </div>
                  </div>

                  {section.files && Object.keys(section.files).length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">
                        {t("reportDetails.uploadedDocuments")}
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(section.files).map(
                          ([fileKey, filesList]: [string, any]) =>
                            filesList &&
                            filesList.length > 0 && (
                              <div
                                key={fileKey}
                                className="bg-background rounded p-3"
                              >
                                <p className="text-sm font-medium mb-2 capitalize">
                                  {fileKey
                                    .replace(/_/g, " ")
                                    .split(" ")
                                    .slice(1)
                                    .join(" ")}
                                </p>
                                <div className="space-y-2">
                                  {filesList.map(
                                    (file: any, fileIdx: number) => (
                                      <div
                                        key={fileIdx}
                                        className="flex items-center gap-2 text-sm"
                                      >
                                        {file.type.includes("image") ? (
                                          <img
                                            onClick={() => {
                                              setSelectedImage('../../public/logo.png');
                                              setIsOpenImageModal(true);
                                            }}
                                            src="/logo.png"
                                            className="h-6 w-6"
                                          />
                                        ) : (
                                          <FileText className="h-4 w-4" />
                                        )}
                                        <span>{file.name}</span>
                                        <span className="text-muted-foreground">
                                          ({file.size})
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Primary Equipment AIS*/}
        {report?.step3 && Object.keys(report?.step3).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.primaryEquipmentAIS")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step3.map((section, idx: number) => (
                <div key={idx} className="p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.currentTransformers")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.surgeArresters")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.manufacturer || "-"}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.circuitBreakers")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.description || "-"}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.isolators")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.condition || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Secondary Equipment*/}
        {report?.step4 && Object.keys(report?.step4).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.secondaryEquipment")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step4.map((section, idx: number) => (
                <div key={idx} className="p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.currentTransformers")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.surgeArresters")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.manufacturer || "-"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">
                          {t("reportDetails.circuitBreakers")}
                        </p>
                        <p className="font-medium">
                          {section.sectionData?.description || "-"}
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">
                          {t("reportDetails.isolators")}
                        </p>
                        <p className="font-medium">
                          {section.sectionData?.condition || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Outdoor Switchyard */}
        {report?.step5 && Object.keys(report?.step5).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.outdoorSwitchyard")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step5.map((section, idx: number) => (
                <div key={idx} className="p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.busbarSystems")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.foundations")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.manufacturer || "-"}
                      </p>
                    </div>
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.lightningProtectionSystems")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.description || "-"}
                      </p>
                    </div>
                    <div className="border p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.generalCondition")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.condition || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Power Transformers */}
        {report?.step6 && Object.keys(report?.step6).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.powerTransformers")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step6.map((section, idx: number) => (
                <div key={idx} className="p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-200/20 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.transformerType")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div className="bg-blue-200/20 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.manufacturer")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.manufacturer || "-"}
                      </p>
                    </div>
                    <div className="bg-blue-200/20 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.capacity")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.description || "-"}
                      </p>
                    </div>
                    <div className="bg-blue-200/20 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.condition")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.condition || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 7: Warranty and Limited Liability */}
        {report?.step7 && Object.keys(report?.step7).length > 0 && (
          <div className="bg-card border-b p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-xl font-bold">
                {t("reportDetails.warrantyAndLiability")}
              </h2>
            </div>
            <div className="space-y-6">
              {report?.step7.map((section, idx: number) => (
                <div key={idx} className="p-4">
                  <h3 className="font-bold text-lg mb-4 capitalize">
                    {section.sectionKey.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-2 gap-6 p-3 border border-yellow-300 bg-yellow-50 rounded-xl">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.systemType")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("reportDetails.manufacturer")}
                      </p>
                      <p className="font-medium">
                        {section.sectionData?.equipmentTag || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <RiskAnalysisPDF report={report} />
        <ModalImage
          isOpenImageModal={isOpenImageModal}
          setIsOpenImageModal={setIsOpenImageModal}
          selectedImage={selectedImage}
        />
      </div>
    </div>
  );
};

export default ReportDetails;