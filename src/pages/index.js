import React from "react"
import style from '../styles/index.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Introduction from './introduction'


import Navbar from './../components/home/nabvar'

const IndexPage = () => (
<div className={style.maindiv}>
    <Navbar />
    <p>Home page.</p>
    <p>Now go build something great.</p>
    </div>
)

export default IndexPage
