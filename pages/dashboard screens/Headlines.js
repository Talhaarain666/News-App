import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Headlines() {

    const [apiData, setApiData] = useState([]);

    const getNews = () => {
        const ApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-01&sortBy=publishedAt&apiKey=d818cb8b442940bd92edf366e4c32594"
        axios.get(ApiUrl).then((response) => {
            setApiData(response.data.articles)
            console.log(response.data.articles)
        })
    }
    useEffect(() => {
        getNews();
    }, [])

    const navigate = useNavigate();
    // const newsDetailsPg = (item,ind) => {
    //     console.log(item)
    //     navigate({ind})

    // }

    return (
        <Box sx={{ marginTop: "100px" }}>
            {apiData.map((val, i) => {
                return (<>
                    <Box onClick={() => navigate(`/headlines/${i}`)} key={i}>
                        <Typography variant="h4">{val.title}</Typography>
                        <img width="200px" src={val.urlToImage} />
                    </Box>
                </>)
            })}
        </Box>
    )
}

export default Headlines;