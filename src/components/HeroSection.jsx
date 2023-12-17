/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Divider,
  Box,
  Text,
  Flex,
  Icon,
  VStack,
  Button,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import { MdDeleteForever, MdCheck, MdCancel } from "react-icons/md";
import { GetThemeValues } from "./ThemeContext";

const HeroSection = ({
  todoList,
  handleDelete,
  toggleTaskCompletion,
  clearCompletedTask,
}) => {
  const [activeTab, setActiveTab] = useState("All");
  const{isDarkMode}=GetThemeValues()

  const [tabState] = useState([
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Completed" },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    return tabState.map((category, index) => (
      <VStack
        key={index}
        onClick={() => handleTabChange(category.name)}
        cursor="pointer"
        fontWeight={activeTab === category.name ? "bold" : "semibold"}
        color={
          activeTab === category.name ? (isDarkMode ? "whiteAlpha.900" : "blackAlpha.900") : (isDarkMode ? "blue.700" : "blackAlpha.700") 
        }
        
        borderBottom={
          activeTab === category.name ? "2px solid teal.300" : "none"
        }
        bgColor={
          activeTab === category.name ? (isDarkMode ? "purple.900" : "whiteAlpha.900") : (isDarkMode ? "transparent" : "transparent") 
        }
        
        shadow={activeTab === category.name ? "sm" : "none"}
        w="full"
        rounded="lg"
        transition="background-color 400ms"
        align="center"
        fontSize="lg"
        display={"flex"}
        justifyContent="center"
      >
        <Flex>
          <Text>{category.name}</Text>
        </Flex>
      </VStack>
    ));
  };

  const Stats = ({ todoList, activeTab }) => {
    const getStats = () => {
      if (activeTab === "All") {
        return `${todoList.length} ${todoList.length === 1 ? "item" : "items"}`;
      } else if (activeTab === "Active") {
        const activeCount = todoList.filter((task) => !task.completed).length;
        return `${activeCount} ${activeCount === 1 ? "item" : "items"}`;
      } else {
        const completedCount = todoList.filter((task) => task.completed).length;
        return `${completedCount} ${completedCount === 1 ? "item" : "items"}`;
      }
    };

    return (
      <Box
        w={{ base: "90vw", md: "74vw", lg: "57vw", xl: "43.5vw" }}
        h={"60px"}
        marginTop={{ base: "35px", md: "2px", lg: "2px", xl: "2px" }}
        pos={"relative"}
        left={{ base: "21px", md: "6rem", lg: "13.5rem", xl: "350px" }}
        bgColor={`${isDarkMode ?"#000" :"whiteAlpha.900" }`}       
      >
        <Flex justifyContent="space-between" margin="10px" color={`${isDarkMode ?"#000" :"gray.500" }`}>
          <Text fontSize={"md"} paddingBlockStart={"12px"}  color={`${isDarkMode ?"whiteAlpha.700" :"gray.500" }`} >
            {getStats()}
          </Text>
          <Button
          //colorScheme="twitter"
          h={"2rem"}
          marginTop={"1rem"}
           // paddingBlockStart={"12px"}
            bgColor= {`${isDarkMode ?"blue.500" :"whiteAlpha.900" }`} 
            color={`${isDarkMode ?"whiteAlpha.700" :"gray.500" }`}   
            fontWeight={"400"}
            onClick={clearCompletedTask}
          >
            Clear Completed
          </Button>
        </Flex>
      </Box>
    );
  };

  //Function to update the filter value
  const filteredTasks =
    activeTab === "All"
      ? todoList
      : todoList.filter((task) => {
          return activeTab === "Active" ? !task.completed : task.completed;
        });

  return (
    <>
      <Box bgColor={`${isDarkMode ?"gray.900" :"blackAlpha.50" }`} h={"100vh"}>
        <Tabs
          display={"flex"}
          alignItems={"center"}
          justifyContent={{
            base: "space-between",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          width={{ base: "90vw", md: "74vw", lg: "57vw", xl: "43.5vw" }}
          height={{ base: "10vh", md: "8vh", lg: "10vh", xl: "10vh" }}
          bgColor={`${isDarkMode ?"blackAlpha.900" :"#fff" }`} 
          paddingInline={18}
          gap={"2px"}
          borderTopRadius="lg"
      
          pos={"absolute"}
          top={{ base: "17rem", md: "16rem", lg: "15rem", xl: "15rem" }}
          left={{ base: "1.3rem", md: "6rem", lg: "13.5rem", xl: "22rem" }}
        >
          <TabList
            border={"none"}
            w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "35rem" }}
            pos={"relative"}
            marginTop={{ base: "-30px", md: "0", lg: "0", xl: "0" }}
            left={{ base: "40px", md: "0", lg: "0", xl: "0" }}
          >
            {renderTabs()}
          </TabList>

          <Divider
            borderColor={`${isDarkMode ?"whiteAlpha.900" :"blackAlpha.900" }`}  
            mt={"3rem"}
            w={{ base: "89vw", md: "73vw", lg: "56vw", xl: "43vw" }}
            pos={"absolute"}
            left={{ base: ".17rem", md: ".3rem", lg: ".28rem", xl: ".28rem" }}
          />
        </Tabs>
        <Box>
          <Flex
            flexDir={{ base: "row", md: "row", lg: "row", xl: "column" }}
            flexWrap="wrap"
          >
            {filteredTasks.map((task) => {
              return (
                <Box
                  w={{ base: "90vw", md: "74vw", lg: "57vw", xl: "43.5vw" }}
                  
                  pos={"relative"}
                  zIndex={"800"}
                  top={{ base: "35px", md: ".5rem", lg: ".5rem", xl: ".5rem" }}
                  left={{
                    base: "1.3rem",
                    md: "6rem",
                    lg: "13.5rem",
                    xl: "22rem",
                  }}
                  
                  mt={0}
                  key={task.id}
                  fontWeight="semibold"
                  color="gray.900"
                >
                  <Box
                   bgColor= {`${isDarkMode ?"blackAlpha.900" :"#fdfdfd" }`}
                    p={{ base: "0", md: "2", lg: "2", xl: "2" }}
                  >
                    <Flex>
                      <Icon
                        as={task.completed ? MdCheck : MdCancel}
                        color={task.completed ? (isDarkMode ? "whiteAlpha.900" : "#4299E1") : (isDarkMode ? "blue.700" : "#FDFDFD")}
                       
                      
                        bgColor={task.completed ? (isDarkMode ? "transparent" : "#fff") : (isDarkMode ? "whiteAlpha.900" : "#63B3ED")}
                       
                        w={"20px"}
                        h={"20px"}
                        marginInline={"7px"}
                        marginTop={"4px"}
                        fontSize={{
                          base: "2xl",
                          md: "2xl",
                          lg: "4xl",
                          xl: "4xl",
                        }}
                        rounded="2rem"
                        p={{ base: "0", md: "1", lg: "1", xl: "1" }}
                        
                        cursor="pointer"
                        onClick={() => toggleTaskCompletion(task.id)}
                      />

                      <Text
                        fontSize="md"
                        textDecoration={
                          task.completed ? "line-through" : "none"
                          
                        }
                        color= {`${isDarkMode ?"#fff" :"#000" }`}
                        cursor="pointer"
                        onClick={() => toggleTaskCompletion(task.id)}
                        flex="1"
                      >
                        {task.text}
                      </Text>

                      <Icon
                        as={MdDeleteForever}
                        color="#F56565"
                        w={"30px"}
                        h={"30px"}
                        fontSize={{
                          base: "2xl",
                          md: "2xl",
                          lg: "4xl",
                          xl: "4xl",
                        }}
                        rounded="2rem"
                        p={{ base: "0", md: "1", lg: "1", xl: "1" }}
                        ms="auto"
                        cursor="pointer"
                        onClick={() => handleDelete(task.id)}
                      />
                    </Flex>
                    <Divider borderColor={"#CBD5E0"} mt={"5px"} />
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Stats todoList={todoList} activeTab={activeTab} />
      </Box>
    </>
  );
};

export default HeroSection;
