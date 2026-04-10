import Background from "@/components/background.jsx";
import dados from "@/data/data.json";

export default async function SiteLayout({ children }) {

  return (
    <div className="bg-[#320A27] min-h-screen flex flex-col">
      {children}
    </div>
  );
};