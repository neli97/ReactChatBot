import React from "react";

import ph from "../assets/php3.jpg";
import javaimg from "../assets/java.jpg";
import cshr from "../assets/csharp.png";

import baanner from "../assets/coffee-g58b811670_1920.jpg";
import enjoyCode from "../assets/text-banner.png";
import { Link } from "react-router-dom";

const Landing = () => (
        <div className="container homepage-container">
            
            <div className="content-wrapper-home">
                <div className="banner-box">
                    <img alt="banner" src={baanner}/>
                    <img className="enjoy-img" alt="love code" src={enjoyCode}/>
                </div>
                <div className="content-box-main">
                    <h1 className="test">Selling you great stuff</h1>
                    <div class="row">
                        <div class="col s4">
                            <div class="row">
                                <div class="col s12">
                                <div class="card">
                                    <div class="card-image">
                                    <img src={ph} />
                                    <span class="card-title">PHP for Beginners</span>
                                    </div>
                                    <div class="card-content">
                                    <p>PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.</p>
                                    </div>
                                    <div class="card-action">
                                    <a href="#">This is a link</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s4">
                        <div class="row">
                                <div class="col s12">
                                <div class="card">
                                    <div class="card-image">
                                    <img src={javaimg} />
                                    <span class="card-title">Java Programming</span>
                                    </div>
                                    <div class="card-content">
                                    <p>java Programming Course for Beginners to Object Oriented Programming. BONUS: Build REST API with Spring Boot.</p>
                                    </div>
                                    <div class="card-action">
                                    <a href="#">This is a link</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s4">
                        <div class="row">
                                <div class="col s12">
                                <div class="card">
                                    <div class="card-image">
                                    <img src={cshr} />
                                    <span class="card-title">C# Basics</span>
                                    </div>
                                    <div class="card-content">
                                    <p>Master <strong>C#</strong> fundamentals in 6 hours - The most popular course with 50,000+ students, packed with tips and exercises!</p>
                                    </div>
                                    <div class="card-action">
                                    <a href="#">This is a link</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="see-more">
                        <Link to={'/shop'} className="more-cr">See more courses</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )

export default Landing;