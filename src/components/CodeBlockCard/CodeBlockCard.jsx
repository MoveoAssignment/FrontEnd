import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
export default function CodeBlockCard({
    title="hello world",
    code="console.log('hello world')",
    image_url = "https://thecodedose.com/assets/hello_world_js.png",
    description = "hello world",
    _id="1234"
}) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 350, borderRadius: "20px"}} onClick={()=>navigate(`/codeblock/${_id}`)}>
      <CardActionArea sx={{height: '100%'}}>
        <CardMedia
          component="img"
          height="250"
          image={image_url}
          alt="CodeBlock image"
        />
        <CardContent>
          <Typography fontFamily={"Inter"} gutterBottom variant="h5" component="div" fontWeight={800}>
            {title}
          </Typography>
          <Typography fontSize={"1rem"} fontFamily={"Inter"} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
