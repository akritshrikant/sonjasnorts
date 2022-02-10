import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
function HomePage(){
return (
    <div className="HomePage">
        <center>
            <h1>
                Sonja Snorts
            </h1>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.href="SnortLog";
                }}
                >
                Enter
                </Button>
            <Button
            variant="contained"
            onClick={() => {
                window.location.href="ComplaintPage";
            }}
            >
            File a Complaint
            </Button>
            <h3>
                Welcome to the Snort Site
            </h3>
        </center>
    </div>
);

}


export default HomePage;