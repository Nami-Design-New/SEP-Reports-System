import { FileText, Clock, AlertTriangle, Users } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { useTranslation } from "react-i18next";
import { ChartPieLabelList } from "@/components/statisticsCharts/ChartPieLabelList";
import {
  chartConfig1,
  chartConfig2,
  chartData1,
  chartData2,
} from "@/components/statisticsCharts/ConfigDataForCharts";
import { ChartLineDots } from "@/components/statisticsCharts/ChartLine";
import { ChartColumn } from "@/components/statisticsCharts/ChartColumn";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Statistics and Reports</h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Statistics and
          Reports
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title={`إجمالي التقارير`}
          value={6}
          icon={FileText}
          variant="default"
        />
        <StatsCard
          title={`معدل النمو`}
          value={`15%`}
          icon={Clock}
          variant="info"
        />
        <StatsCard
          title={`مشاكل حرجة`}
          value={`5`}
          icon={AlertTriangle}
          variant="warning"
        />
        <StatsCard
          title={`معدل الاعتماد`}
          value={`85%`}
          icon={Users}
          variant="success"
        />
      </div>

      {/* Pie Chart  */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border p-8 rounded-xl ">
            <div>
              <h3 className="text-lg font-bold">Report Status </h3>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet. </p>
            </div>
            <div>
              <ChartPieLabelList
                chartConfig={chartConfig1}
                chartData={chartData1}
              />
            </div>
          </div>
          <div className="bg-white border p-8 rounded-xl ">
            <div>
              <h3 className="text-lg font-bold">Distrbute Risks </h3>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet. </p>
            </div>
            <div>
              <ChartPieLabelList
                chartConfig={chartConfig2}
                chartData={chartData2}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Line Chart */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 ">
          <div className="bg-white border p-8 rounded-xl ">
            <div>
              <h3 className="text-lg font-bold">Month Reports Numbers </h3>
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet ipsum dolor sit amet.{" "}
              </p>
            </div>
            <div>
              <ChartLineDots />
            </div>
          </div>
        </div>
      </div>
      {/* Column Chart */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 ">
          <div className="bg-white border p-8 rounded-xl ">
            <div>
              <h3 className="text-lg font-bold">Station More Problems</h3>
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet ipsum dolor sit amet.{" "}
              </p>
            </div>
            <div>
              <ChartColumn />
            </div>
          </div>
        </div>
      </div>

      {/* work summary */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 ">
          <div className="bg-white border p-8 rounded-xl ">
            <div>
              <h3 className="text-lg font-bold">Work Summary</h3>
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet ipsum dolor sit amet.{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 py-10">
              <div className="bg-blue-50/40 p-5 rounded-xl flex justify-between items-center">
                <span>2.5 يوم</span>
                <span>متوسط وقت المراجعة </span>
              </div>
              <div className="bg-blue-50/40 p-5 rounded-xl flex justify-between items-center">
                <span> 75%</span>
                <span> معدل الاعتماد من المرة الأولى</span>
              </div>
              <div className="bg-blue-50/40 p-5 rounded-xl flex justify-between items-center">
                <span> 3.2</span>
                <span> متوسط عدد المكونات لكل تقرير</span>
              </div>
              <div className="bg-blue-50/40 p-5 rounded-xl flex justify-between items-center">
                <span> 4</span>
                <span> إجمالي المكونات المفحوصة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
