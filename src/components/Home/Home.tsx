import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner"
import { Grid, Box } from '@mui/material';
import s from './Home.module.css'


export default function Home() {




    const infoCard: { name: string, img: string }[] = [
        {
            name: "Bariloche",
            img: "https://media.staticontent.com/media/pictures/60d1c917-6fac-4450-87bd-aaae621e3b9f"
        },
        {
            name: "Bariloche",
            img: "https://media.staticontent.com/media/pictures/60d1c917-6fac-4450-87bd-aaae621e3b9f"
        },
        {
            name: "Bariloche",
            img: "https://media.staticontent.com/media/pictures/60d1c917-6fac-4450-87bd-aaae621e3b9f"
        },
        {
            name: "Bariloche",
            img: "https://media.staticontent.com/media/pictures/60d1c917-6fac-4450-87bd-aaae621e3b9f"
        }
    ]

    return (
        <>
            <h1>NAVBAR</h1>
            <Banner />
            {
                infoCard?.map(e => {
                    return (
                        <>
                            <Link to={`/booking`} >
                                <Cards  name={e.name} img={e.img} />
                            </Link>
                        </>
                    )
                })
            } 
        </>
    )
}






