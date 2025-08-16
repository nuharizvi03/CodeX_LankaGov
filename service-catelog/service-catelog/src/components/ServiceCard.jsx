export default function ServiceCard({ icon, name }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:bg-gray-50 cursor-pointer transition">
      <span className="text-2xl">{icon}</span>
      <p className="font-medium text-gray-800">{name}</p>
    </div>
  );
}
