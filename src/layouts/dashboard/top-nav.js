import { Stack } from "@mui/material";
import { items } from "./config";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";


export const TopNav = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [selectedSubText, setSelectedSubText] = useState(null);
  const navigate = useNavigate();

  const handleTextClick = (text) => {
    navigate(text.path)
    setSelectedText(text.title);
    console.log(text)
  };
  
 const handleText = (text) => {
    setSelectedSubText(text);
  };

  const handleCategoryNav = (item)=>{
    console.log(item)
    navigate(item.path)
  }
  const handleMouseEnter = (itemId) => {
    setSelectedItem(itemId);
  };
 
  // console.log(selectedText.path)
  // console.log(selectedSubText.path)
  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  const handleMouseEnterSubmenu = (subitemId) => {
    setSelectedSubItem(subitemId);
  };

  const handleMouseLeaveSubmenu = () => {
    setSelectedSubItem(null);
  };

  return (
    <>
     <Box className="parent" component="main">
  <Stack
    className="items-container"
    sx={{
      margin: { sm: "auto 20px", md: "auto 430px" },
    }}
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 2, sm: 3, md: 6}}
  >
    {items.map((item) => (
      <div
        key={item.title}
        className={`item ${selectedItem === item.title ? "selected" : ""}`}
        onMouseEnter={() => handleMouseEnter(item.title)}
        onMouseLeave={handleMouseLeave}
        
      >
        <Stack
         onClick={()=> handleTextClick(item)}
        >
         {item.title}   
            </Stack> 
        {item.submenu && selectedItem === item.title && (
          <Stack
            className="texts-fixed"
            sx={{
              right: { sm: "0px", md: "430px" },
              left: { sm: "0px", md: "400px" },
            }}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => {
              // Check if the mouse is still hovering over the submenu
              if (!selectedSubItem || selectedSubItem !== item.title) {
                setSelectedItem(null); // Unselect the main item
              }
            }}
          >
            {item.submenu.map((subitem, index) => (
              <Stack
                key={subitem.title}
                className={`subitem-container ${
                  selectedSubItem === subitem.title ? "selected" : ""
                }`}
                onMouseEnter={() => handleMouseEnterSubmenu(subitem.title)}
                onMouseLeave={handleMouseLeaveSubmenu}
               
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  height: "40px", // Adjust the height as needed
                }}
              >
                {/* <SvgIcon fontSize="small">{subitem.icon}</SvgIcon> */}
                <div style={{ width: "300px" }} className="subitem"  onClick={() => handleTextClick(subitem)}>
                  {subitem.title}
                </div>

                {subitem.submenu &&
                  subitem.submenu.length > 0 && selectedSubItem === subitem.title && 
                  (
                    <Stack
                      className="subtexts"
                      direction={'column'}
                        sx={{
                           
                            left: { sm: "0px", md: "730px" },
                        }}
                    >
                      {subitem.submenu.map((subsubitem, subindex) => (
                        <div
                          key={subsubitem.title}
                          className="subtext"  
                        >
                          {/* <SvgIcon fontSize="small">{subsubitem.icon}</SvgIcon> */}
                          <Stack  onClick={() => handleTextClick(subsubitem)}>{subsubitem.title}</Stack>
                        </div>
                      ))}
                    </Stack>
                  )}
              </Stack>
            ))}
          </Stack>
        )}
      </div>
    ))}
  </Stack>
  
</Box>

    </>
  );
};
