import SettingsForm from "@/components/setting/SettingForm";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SettingsForm />
      </div>
    </main>
  );
}