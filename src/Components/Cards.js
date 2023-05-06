import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import Chapter from './Chapter';

const baseURL = "https://d7sxkb-3001.csb.app/chapter";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function Cards() {
  const [post, setPost] = React.useState(null);

  const time = new Date()
  const todaysTime = (Date.parse(time))/1000
  console.log("time", todaysTime)


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("RESPONSE", response.data )
      setPost(response.data);
      
    });
    
  }, []);

  if (!post) return <div>Loading data</div>;
else{
 
  
  return (
    <div style={{margin:"1%"}}>
        <div class="container">
      <div class="row">
      {post.map((data) =>{
        if(data.date._seconds < todaysTime ){
          
      
    {console.log("data",data.date._seconds)}
    return(
        <div class="col-4">
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Dear Taaani,
            
        </Typography>
        <Typography variant="h5" component="div">
         
         <Chapter name={data.chapter}
         datainside = {data.datainside}/>
        </Typography>
    
        {/* <Typography variant="body2">
          {data.datainside}
          
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">{data.date._seconds}</Button>
      </CardActions> */}
    </Card>
    </div>
)
    
  }
  
} )}
   
</div>
</div>
    </div>
  );
  


}
}
