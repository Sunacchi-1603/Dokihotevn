import { Box, Container, Stack, Typography } from "@mui/material";
import { SelectedItemContext } from "../../context/main-context";
import { useContext } from "react";
import { TopNav } from "../../layouts/dashboard/top-nav";

const Book = () => {
  
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
       
      }}
    > <TopNav/>
        <Container maxWidth="xl">
            
            <Stack
            direction={{ xs: 'column'}}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              
                <Typography>Bán sách cũ</Typography>
            </Stack>
        </Container>
    </Box>
  );
};

export default Book;
