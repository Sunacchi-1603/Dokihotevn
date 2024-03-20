import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopNav } from "../layouts/dashboard/top-nav";
import { items } from "../layouts/dashboard/config";
import {Book,SachVaTruyenThieuNhi} from "../Page/Book";


function RouterDonki() {
  // ComponentSelector sẽ chọn và trả về component dựa trên tên được chuyển vào
  const ComponentSelector = ({ componentName }) => {
    switch (componentName) {
      case "Book":
        return <Book />;
      case "SachVaTruyenThieuNhi":
        return <SachVaTruyenThieuNhi />;
      // Thêm các case cho các component khác nếu cần
      default:
        return null;
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Định tuyến cho TopNav */}
          <Route path="/" element={<TopNav />} />

          {/* Định tuyến cho các mục chính từ mảng items */}
          {items.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<ComponentSelector componentName={item.component} />}
            />
          ))}

          {/* Định tuyến cho các submenu từ mảng items */}
          {items.map((item) =>
            item.submenu &&
            item.submenu.map((subItem) => (
              <Route
                key={subItem.path}
                path={subItem.path}
                element={<ComponentSelector componentName={subItem.component} />}
              />
            ))
          )}
         
        </Routes>
      </div>
    </Router>
  );
}

export default RouterDonki;
