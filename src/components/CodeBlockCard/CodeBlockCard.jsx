// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, Button, CardActionArea, CardActions } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";


// export default function CodeBlockCard({
//   title="hello world",
//   code="console.log('hello world')",
//   image_url = "https://thecodedose.com/assets/hello_world_js.png",
//   _id="1234"
// }) {
  
//   const navigate = useNavigate();
//   const { pathname } = useLocation(); // State to store edited song details
//   return (
//     <Card
//       sx={{
//         // margin: "5rem",
//         maxWidth: 295,
//         borderRadius: "0.8rem",
//         overflow: "hidden",
//         backgroundColor: "#1A1A1A",
//         transition: "background-color 0.3s, box-shadow 0.3s",
//         "&:hover": {
//           backgroundColor: "#2A2A2A",
//         },
//       }}
//     >
//       <CardActionArea onClick={() => navigate(`/codeblock/${_id}`)}>
//         <CardMedia component="img" image={image_url} alt="codeBlock image" />
//         <CardContent>
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontSize: "1.2rem",
//               marginBottom: "0.5rem",
//               color: "white",
//             }}
//             variant="h5"
//             component="div"
//           >
//             {title}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }


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
    <Card sx={{ maxWidth: 345}} onClick={()=>navigate(`/codeblock/${_id}`)}>
      <CardActionArea sx={{height: '100%'}}>
        <CardMedia
          component="img"
          height="250"
          image={image_url}
          alt="CodeBlock image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={800}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
