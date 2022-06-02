import { Button } from "@mui/material";

function TAButton(props) {

    const { BtnLabel,BtnOnClick } = props;
    return <>

        <Button onClick={BtnOnClick} variant="contained" >{BtnLabel}</Button>

    </>
}

export default TAButton;