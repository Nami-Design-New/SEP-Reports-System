import { FileText, Clock, AlertTriangle, Users } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { useTranslation } from "react-i18next";
import { EngineerReportTable } from "@/components/EngineerTable";

const Engineers = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          {t("engineers.userManagement")}
        </h1>
        <p className="text-muted-foreground">
          {t("engineers.userManagementDesc")}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        <StatsCard
          title={t("engineers.totalEngineers")}
          value={4}
          icon={FileText}
          variant="default"
        />
        <StatsCard
          title={t("engineers.activeEngineers")}
          value={2}
          icon={Clock}
          variant="info"
        />
        <StatsCard
          title={t("engineers.inactiveEngineers")}
          value={2}
          icon={AlertTriangle}
          variant="warning"
        />
      </div>

      {/* Reports Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              {t("engineers.menuEngineers")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("engineers.manageEngineerData")}
            </p>
          </div>
        </div>
        <EngineerReportTable />
      </div>
    </div>
  );
};

export default Engineers;
