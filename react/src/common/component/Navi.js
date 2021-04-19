import React from 'react'
import { Link } from 'react-router-dom'
const Navi = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            Me
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">WHO</a>
                            </li>
                            <li>
                                <a href="#">WHAT</a>
                            </li>
                            <li>
                                <a href="#">WHERE</a>
                            </li>
                            <li>
                                <Link to={'/board/news'}>NEWS</Link>
                            </li>
                            <li>
                                <Link to={'/board/cctv-seoul'}>서울CCTV</Link>
                            </li>
                            <li>
                                <a href="/user/login">LOGIN</a>
                            </li>
                            <li>
                                <a href="/user/signup">SIGNUP</a>
                            </li>
                            <li>
                                <a href="/board/counter">COUNTER</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navi
