import { TextField } from "@mui/material";

function TAInput(props) {
    
    const {Label,Type} = props;
    
    return <>

        <TextField id="outlined-basic" type={Type} label={Label} variant="outlined" />

    </>
}

export default TAInput;