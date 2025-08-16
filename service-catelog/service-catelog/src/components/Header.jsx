export default function Header() {
  return (
   <header className="bg-white shadow p-4 flex justify-between items-center">
  {/* Left Logo */}
  <div className="text-xl font-bold"><i class="fa fa-cube"></i>LankaGov</div>

  {/* Right Section (Nav + Profile Pic) */}
  <div className="flex items-center gap-6">
    <nav className="flex gap-4">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Services</a>
      <a href="#" className="hover:text-blue-600">About</a>
      <a href="#" className="hover:text-blue-600">Contact</a>
    </nav>

    {/* Profile Picture */}
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-10 h-10 rounded-full border"
    />
  </div>
</header>


  );
}
