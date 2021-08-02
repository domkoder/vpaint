import { Link } from "react-router-dom";

function Aside({onResetColor}) {
  return (
    <aside className="sidebar">
     
      <div className="image-container">
        <img src="/img/add.svg" alt="room-image" />
      </div>

      <Link onClick={onResetColor} to="/">
      <div className="image-container">
          <img src="/img/sidebar-image1.png" alt="room-image" />
        </div>
      </Link>

      <Link onClick={onResetColor} to="/2">
        <div className="image-container">
          <img src="/img/sidebar-image2.png" alt="room-image" />
        </div>
      </Link>

      <Link onClick={onResetColor} to="/3">
      <div className="image-container">
        <img src="/img/sidebar-image3.png" alt="room-image" />
      </div>
      </Link>
    </aside>
  )
}

export default Aside
