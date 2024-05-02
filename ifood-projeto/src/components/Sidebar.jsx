import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <Link to="/">Cadstro</Link>
      <Link to="/lista">Pedidos</Link>
      <Link to="/finalizado">Finalizados</Link>
    </div>
  );
}

export default Sidebar;
