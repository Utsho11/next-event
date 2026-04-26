import ManageEventsHeader from "@/components/events/ManageEventsHeader";
import ManageEventsTable from "@/components/events/ManageEventTable";

const Page = () => {
  return (
    <div className="bg-[#dedde7] h-dvh">
      <ManageEventsHeader />
      <ManageEventsTable/>
    </div>
  );
};

export default Page;
