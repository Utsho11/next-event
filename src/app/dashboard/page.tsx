import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import PerformanceOverview from "@/components/dashboard/PerformanceOverview";
import DashboardHighlight from "@/components/dashboard/DashboardHighlight";
import MyTickets from "@/components/dashboard/MyTickets";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <DashboardHeader />
        <DashboardStats />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PerformanceOverview />
          </div>

          <DashboardHighlight />
        </div>

        <MyTickets />
      </div>
    </main>
  );
}