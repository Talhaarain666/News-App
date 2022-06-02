import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import TAButton from "../config/components/button";
import TAInput from "../config/components/input";

function LoginPage() {

    const navigate = useNavigate();

    let LoginUser = () => {
        console.log("User Login Successfully")
        navigate("/", { state: { user: true } })
    }

    return <>
        <Box>
            <TAInput Label="User Name" Type="text" />
        </Box>
        <Box>
            <TAInput Label="Password" Type="password" />
        </Box>
        <Box>
            <TAButton BtnOnClick={LoginUser} BtnLabel="Sign In" />
        </Box>

    </>
}

export default LoginPage;