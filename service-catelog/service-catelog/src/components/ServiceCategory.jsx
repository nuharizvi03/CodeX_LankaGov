import ServiceCard from "./ServiceCard";

export default function ServiceCategory({ category, services, searchTerm }) {
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredServices.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredServices.map((service, idx) => (
          <ServiceCard key={idx} icon={service.icon} name={service.name} />
        ))}
      </div>
    </div>
  );
}
