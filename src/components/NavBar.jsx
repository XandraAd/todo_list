/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Stack, Box, Text, Icon, Flex } from "@chakra-ui/react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { GetThemeValues } from './ThemeContext';


const NavBar = () => {
  const { isDarkMode, toggleColorTheme } = GetThemeValues();

  return (
    <Stack direction="column">
      <Box
       pt="50px"
        w="100vw"
        h="40vh"
        bgImage={{
          base: "url('/bg-mobile-light.jpg')",
          md: "url('/bg-desktop-light.jpg')",
          lg: "url('/bg-desktop-light.jpg')",
          xl: "url('/bg-desktop-light.jpg')",
        }}
        bgSize="cover"
        //bgColor="teal.400"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex
         justifyContent={'space-between'}
         marginInline={{base:'20px',md:"20px",lg: "10px", xl: "10" }}>
       
        <Text fontSize="3xl"  marginLeft={{base:'0',md:"70px",lg: "200px", xl: "320px" }} textTransform={"uppercase"} color={`${isDarkMode ?"#000" :"#FFF" }`}>
          ToDo
        </Text>
<Box width={{base:'-8px',md:"8rem",lg: "16.5rem", xl: "30em" }}>
{isDarkMode ? (
              <Icon
                as={BsSun}
                color="#000"
                w={{ base: '25px', md: "25px", lg: "35px", xl: "45px" }}
                h="25px"
                fontSize={{ base: "2xl", md: "2xl", lg: "4xl", xl: "4xl" }}
                rounded="2rem"
                p="0"
                marginTop={{ base: "3", md: "3", lg: "4", xl: "4" }}
                marginLeft={{ base: "4", md: "4", lg: "4", xl: "4" }}
                cursor="pointer"
                onClick={toggleColorTheme}
              />
            ) : (
<Icon
     
        
          as={ BsMoonFill}
          color="#FFF"
          w={{base:'25px',md:"25px",lg: "35px", xl: "45px" }}
          h={"25px"}
          fontSize={{
            base: "2xl",
            md: "2xl",
            lg: "4xl",
            xl: "4xl",
          }}
          rounded="2rem"
          p={{ base: "0", md: "0", lg: "0", xl: "0" }}
          marginTop={{ base: "3", md: "3", lg: "4", xl: "4" }}
          marginLeft={{base:'4',md:"4",lg: "4", xl: "4" }}
        
          cursor="pointer"
          onClick={toggleColorTheme}
        />
            )}
</Box>
        
        </Flex>
       
      </Box>
    </Stack>
  );
};


export default NavBar;




