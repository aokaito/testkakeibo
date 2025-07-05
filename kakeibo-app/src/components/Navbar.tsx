import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav style={{ padding: 16, background: "#f5f5f5" }}>
    <Link to="/" style={{ marginRight: 16 }}>
      ホーム
    </Link>
    <Link to="/transactions" style={{ marginRight: 16 }}>
      取引一覧
    </Link>
    <Link to="/stats" style={{ marginRight: 16 }}>
      月次サマリ
    </Link>
    <Link to="/settings">設定</Link>
  </nav>
);

export default Navbar;