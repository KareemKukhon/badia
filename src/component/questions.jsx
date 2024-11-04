import React, { Component } from 'react';
import AnswerdCard from '../component/answerCard';
import { Box, Grid2, Typography, Button } from '@mui/material';
import Header from '../sections/header';

export default function Question({title, subTitle, link, question, slogan, onClick, isSelected})  {
    return (
      <Box textAlign={"center"}>
        <Typography fontWeight="bold" variant="h4" mt={5}>
          {question}
        </Typography>
        <Typography color='text.secondary'>
          {slogan}
        </Typography>
        
        <Box my={5} width="100%" display="flex" justifyContent="center">
          <Grid2
            width="70%"
            display="flex"
            justifyContent="center"
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid2>
              <AnswerdCard
              isSelected={isSelected} // Pass selected state
              onClick={onClick}
               title={"Investment"} subTitle={"Investment growth through diverse markets."} link={"/"}/>
            </Grid2>
            <Grid2>
              <AnswerdCard title={"Consulting Services"} subTitle={"Business transformation and efficiency solutions"} link={"/"}/>
            </Grid2>
            <Grid2>
              <AnswerdCard title={"Outsourcing"} subTitle={"Innovation through new tech product launches."} link={"/"}/>
            </Grid2>
            <Grid2>
              <AnswerdCard title={"Strategic Partnerships"} subTitle={"Support and investment for rapid growth."} link={"/"}/>
            </Grid2>
          </Grid2>
        </Box>


      </Box>
    );
  
}
