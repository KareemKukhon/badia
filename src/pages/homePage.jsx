import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'
import Header from '../sections/header'

export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <Header/>
        <Box>
            <Typography>
            We are committed in the wilderness to enhance the capabilities of individuals, startups, and government entities to shape the future of the digital economy.
            </Typography>
            <Box>
                {/* images */}
            </Box>
            <Typography>
                Skills
            </Typography>
            <Typography>
            We take pride in equipping young individuals of all genders with the essential and advanced skills necessary to succeed in constantly evolving digital economy markets. Through comprehensive training programs and strategic networking opportunities to connect with talent attractors in various sectors for a complete market integration experience, we empower these talents to succeed not only professionally, but also in maintaining a meaningful balance between work and life in the digital age.
            </Typography>
            <Box>
                {/* images */}
            </Box>
            <Typography>
                القطاعات العامة
            </Typography>
            <Typography>
                رأس المال
            </Typography>
            <Typography>
            We offer a diverse range of financial services, including credit, loans, investment, and wealth management, to help individuals, startups, and government entities grow and achieve their financial goals. Our financial experts will guide you through the complex and often time-consuming process of securing the best possible financial options for your needs.
            </Typography>
            
        </Box>
      </Box>
    )
  }
}
