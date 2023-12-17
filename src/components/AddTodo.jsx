/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Stack,InputGroup,InputRightElement,Input,Button} from '@chakra-ui/react'
import { GetThemeValues } from "./ThemeContext";


const AddTodo = ({handleAddTask }) => {
  const[item,setItem]=useState('')
  const { isDarkMode } = GetThemeValues();


  const handleChange =(e)=>{
setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (item.trim() !== '') {
      handleAddTask(item); // Call the addNewTask function and pass the new task text
      setItem(''); // Clear the input field after adding the task
    }
  };
  

 


  return (
    <Stack  >
      <form onSubmit={handleSubmit}>
      <InputGroup 
    size='md' 
    display="flex"  
    w={{ base: "92vw",md:"74vw", lg: "57vw",xl:"43vw" }} 
    m='5' 
    position="absolute" 
    top="120px" 
    left={{ base: "0",md:"1.8em", lg: "9em",xl:"21em" }}>
      <Input placeholder='Create new Todo item'
      name='text' value={item} py="2rem" bgColor={`${isDarkMode ?"#000" :"#FFF" }`}  onChange={handleChange} required/>
      <InputRightElement 
      width='5rem' 
      py="2px" 
      alignItems="center">
        <Button variant='solid' colorScheme='twitter' size='md' h='80%' w='170px' mt='25px' p='10px' mr={'10px'}  
         color={`${isDarkMode ?"blackAlpha.900" :"whiteAlpha.900" }`} 
              type="submit">
          Add
        </Button>
      </InputRightElement>
    </InputGroup>
      </form>
 
  </Stack>
  )
}

export default AddTodo



