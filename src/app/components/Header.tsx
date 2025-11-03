const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Control Panel</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login"
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesion
      </button>
    </header>
  );
}

export default Header;