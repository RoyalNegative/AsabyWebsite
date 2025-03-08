const MenuIcon = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className="menu-icon icon"
      id="menu-icon"
      viewBox="0 0 32 32"
    >
      <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
    </svg>
  );
};

export default MenuIcon;
