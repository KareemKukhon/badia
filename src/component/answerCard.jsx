import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider, Link } from '@mui/material';

export default function AnswerdCard({ title, subTitle, link, isSelected, onClick }) {
  return (
    <Link
      // href={link}
      onClick={onClick}
      sx={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          maxWidth: 345,
          height: 150,
          backgroundColor: isSelected ? "#3a7de4" : "#4894FE",
          color: "white",
          borderRadius: "15px",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 3,
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </IconButton>
          }
          subheaderTypographyProps={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '21px',
            color: "#CBE1FF"
          }}
          sx={{ textAlign: "left", alignItems: 'flex-start' }}
          title={title}
          titleTypographyProps={{
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '17.6px',
          }}
          subheader={subTitle}
        />
        <CardContent>
          <Divider color="white" />
        </CardContent>
        <CardActions disableSpacing />
      </Card>
    </Link>
  );
}
