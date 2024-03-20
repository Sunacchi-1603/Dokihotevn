
  import PersonIcon from "@mui/icons-material/Person";
  import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
  import DescriptionIcon from "@mui/icons-material/Description";
  import CreateIcon from "@mui/icons-material/Create";
  import CalculateIcon from "@mui/icons-material/Calculate";
  import {
    Add, 
  } from "@mui/icons-material";
  import { SvgIcon } from "@mui/material";
  import SchoolIcon from "@mui/icons-material/School";
  
export const items = [
  {
    title: "Sách",
    path: "/book",
    icon: (
      <SvgIcon fontSize="small">
        <CalendarTodayIcon />
      </SvgIcon>
    ),
    component: "Book",
    submenu: [
      {
        title: "Sách và truyện thiếu nhi",
        path: "/book/Children-books-and-stories",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
        component: "SachVaTruyenThieuNhi",
      },
      {
        title: "Sách phát triển bản thân",
        path: "/book/Personal-development-books",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
        component: "SachPhatTrienBanThan",
      },
      {
        title: "Sách chuyên ngành",
        path: "/book/Specialized-books",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
        component: "SachChuyenNganh",
      },
      {
        title: "Sách ngôn ngữ",
        path: "/book/Language-books",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
        component: "SachNgonNgu",
        submenu: [
          {
            title: "Tiếng Anh",
            path: "/book/Language-books/english-books",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "SachTiengAnh",
          },
          {
            title: "Tiếng Nhật",
            path: "/book/Language-books/japanese-books",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "SachTiengNhat",
          },
        ],
      },
      {
        title: "Sách khác",
        path: "/book/Other-books",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
        component: "SachKhac",
      },
    ],
  },
      {
        title: "Đồ cho nữ",
        icon: (
          <SvgIcon fontSize="small">
            <CalendarTodayIcon />
          </SvgIcon>
        ),
        path: "/For-women",
        component: "DoChoNu",
        submenu: [
          {
            title: "Giày",
            path: "/For-women/shoe-women",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "GiayNu",

          },
          {
            title: "Quần áo",
            path: "/For-women/clothes",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "QuanAoNu",
          },
          {
            title: "Phụ kiện và trang sức",
            path: "/For-women/jewelry-and-accessories",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "PhuKienVaTrangSucNu",
          },
          
          {
            title: "Thời trang nữ khác",
            path: "/For-women/other-women",
            icon: (
              <SvgIcon fontSize="small">
                <Add />
              </SvgIcon>
            ),
            component: "ThoiTrangNuKhac",
          },  
        ],
      },
      // {
      //   title: "Đồ cho nam",
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <CalendarTodayIcon />
      //     </SvgIcon>
      //   ),
      //   submenu: [
      //     {
      //       title: "Giày",
      //       path: "/For-men/shoe-men",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },
      //     {
      //       title: "Quần áo",
      //       path: "/For-men/clothes",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },
          
          
      //     {
      //       title: "Thời trang nam khác",
      //       path: "/For-men/other-men",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },  
      //   ],
      // },
      // {
      //   title: "Đồ cho mẹ và bé",
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <CalendarTodayIcon />
      //     </SvgIcon>
      //   ),
      //   submenu: [
      //     {
      //       title: "Quần áo bé trai",
      //       path: "/Items-for-mothers-and-babies/Baby-boy-clothes",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },
      //     {
      //       title: "Quần áo bé gái",
      //       path: "/Items-for-mothers-and-babies/Baby-girl-clothes",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },
      //     {
      //       title: "Đồ dùng cho trẻ em",
      //       path: "/Items-for-mothers-and-babies/children-supplies",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },
          
      //     {
      //       title: "Đồ dùng cho mẹ",
      //       path: "/Items-for-mothers-and-babies/stuff for mom",
      //       icon: (
      //         <SvgIcon fontSize="small">
      //           <Add />
      //         </SvgIcon>
      //       ),
      //     },  
      //   ],
      // },

]