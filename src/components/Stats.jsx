/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const Stats = ({ todoList }) => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box
      w={{ base: '75vw', md: '55vw', lg: '55vw', xl: '55vw' }}
      h={{ base: 'full', md: 'full', lg: 'full', xl: 'full' }}
    >
      <Flex justifyContent="space-between">
        <p>
          {activeTab === 'All'
            ? todoList.length
            : activeTab === 'Active'
            ? todoList.filter((task) => !task.completed).length
            : todoList.filter((task) => task.completed).length}{' '}
          {activeTab === 'All'
            ? 'Total Todos'
            : activeTab === 'Active'
            ? 'Active Todos'
            : 'Completed Todos'}
        </p>
        <Button onClick={() => handleTabChange(activeTab === 'Completed' ? 'Active' : 'Completed')}>
          {activeTab === 'Completed' ? 'Active Todos' : 'Completed Todos'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Stats;
