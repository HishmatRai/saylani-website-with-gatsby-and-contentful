import React from "react"
import style from '../styles/books.module.scss'
import BookCard from "../components/BooksCard/booksCard"
import Grid from '@material-ui/core/Grid';
import Navbar from './../components/home/nabvar'


const Books = () => (
    <div  >
        <Navbar />

        <img width="100%" src="https://www.saylaniwelfare.com/uploads/2018-14-121544796511.jpg" />

        <Grid className={style.maindiv1} container justify="center">


            <Grid xl={8} lg={8} md={8} sm={12} xs={12} container justify="center" >


                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />
                </Grid>

                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />
                </Grid>


                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />

                </Grid>

                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />

                </Grid>



                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />

                </Grid>



                <Grid xl={4} lg={4} md={4} sm={12} xs={10} >
                    <BookCard />

                </Grid>


                


            </Grid>



            <Grid className={style.main}  lg={2} >


                <h1 className={style.Category}>  Categories</h1>

                <h1 className={style.books} >  <a>  Rohani Wazaef </a> </h1>
                <h1 className={style.books} > <a>  Hazrat Basheer Farooqui  </a>  </h1>
                <h1 className={style.books} >   <a>  All Books  </a> </h1>
                <br />
                <br />
                <br />

            </Grid>


        </Grid>


    </div>
)

export default Books
