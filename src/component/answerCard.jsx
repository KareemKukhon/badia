import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';import { Divider, Link } from '@mui/material';

export default function AnswerdCard({ title, subTitle, link, isSelected, onClick }) {
  return (
    <Link
      // href={link}
      onClick={onClick}
      sx={{ textDecoration: 'none' }}
    >
      <Card
  sx={{
    width: 327,
    height: 104,
    backgroundColor: isSelected ? "#3a7de4" : "#4894FE",
    color: "white",
    textAlign:"left",
    borderRadius: "15px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: 3,
    },
  }}
>
  <CardHeader
    avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
    action={<IconButton><ArrowForwardIosRoundedIcon sx={{ color: 'white' }} /></IconButton>}
    textOverflow="ellipsis"
    subheaderTypographyProps={{
      fontWeight: 400,
      lineHeight: '21px',
      color: "#CBE1FF",
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',       // Ensures ellipsis can work
      maxWidth: '200px' 
    }}
    title={title}
    titleTypographyProps={{
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '17.6px',
    }}
    subheader={subTitle}
  />
  <Divider color="#FFFFFF" sx={{ marginX: 2, height: 1.01 }} /> {/* Added Divider directly here */}
  <CardActions disableSpacing />
</Card>

    </Link>
  );
}
