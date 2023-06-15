// import { makeStyles } from @mui;
import {makeStyles} from '@mui/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: "100%",
        
       
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
       
    },
   
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    price: {
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
        bottom: "35px",
    },
    description: {
        display: "flex",
        position: "relative",
        bottom: "35px",
    },
}));