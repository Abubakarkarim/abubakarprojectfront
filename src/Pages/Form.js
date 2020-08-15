import React from "react"
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
function Form(){

    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState(0)
    const [desc, setDesc] = React.useState("")
    const [page, setPage] = React.useState("")

    const handlebtn = ()=>{
        console.log("cl9cked");
        axios
              .post("http://localhost:3030/dish",{name,price,desc,page})
              .then((response) => {
                  console.log();
               
              })
              .catch((e) => console.log(e.message));
          }
      

    
    React.useEffect(handlebtn
        , []);


   return( <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={8} >
    <TextField id="standard-basic" label="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={8} >
    <TextField id="standard-basic" label="Price" type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
    </Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={8} >
    <TextField id="standard-basic" label="Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
    </Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={2}></Grid>
    <Grid item xs={12} md={8} >
    <TextField id="standard-basic" label="Page" value={page} onChange={(e)=>{setPage(e.target.value)}}/>
    </Grid>
   
    <Grid item xs={12} md={2}></Grid>
    <Button variant="contained" color="primary" onClick={handlebtn}>
  Primary
</Button>



</Grid>)

}


export default Form;