import "../styles/PromotionsBanner.scss";
import JordanGreen from "../assets/greenJordan.png";
import { Button } from "@material-ui/core";


function PromotionsBanner(): JSX.Element {
    return (
        <div className="main_banner">
            <div className="innerBanner">
                <img src={JordanGreen} alt="jordan_green" />
            <div className="description_banner">
            <h1>2022 Jordan The Best Classical</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="button">
                <Button variant="contained" color="inherit">Buy Now</Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PromotionsBanner;