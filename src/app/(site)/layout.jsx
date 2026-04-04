export default function SiteLayout({ children }) {
  return (
    <div className="bg-[#320A27] min-h-screen flex flex-col">
      {children}
    </div>
  );
};