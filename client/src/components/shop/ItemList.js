import React from "react";

import java from '../assets/java.jpg';
import php from '../assets/php3.jpg';
import csharp from '../assets/csharp.png';
import img_html from '../assets/htmlimg.png';
import   angularimg from '../assets/angular.jpeg';
import reactimg from '../assets/reactlrn.png';
import srcmaster from '../assets/master.jpg';
import databaseimg from '../assets/database.png';
import cssimg from '../assets/cssimg.jpg';




const ItemList = () => (
    <div className="container homepage-container">
            
    <div className="content-wrapper-home">
        <div className="banner-box">
            
        </div>
        <div className="content-box-main">
            <div class="row">
                <div class="col s4">
                    <div class="row">
                        <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                            <img alt="test" src={php}></img>
                            <span class="card-title">PHP for Beginners</span>
                            </div>
                            <div class="card-content">
                            <p>PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/composer-get-started?exp=2">Learn More</a>
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
                            <img alt="test" src={java}></img>
                            <span class="card-title">Java Programming</span>
                            </div>
                            <div class="card-content">
                            <p>Java Programming Course for Beginners to Object Oriented Programming. BONUS: Build REST API with Spring Boot.</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/creating-first-spring-boot-application?exp=2">Learn More</a>
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
                                <img alt="c#" src={csharp}></img>
                            <span class="card-title">C# Basics</span>
                            </div>
                            <div class="card-content">
                            <p>Master <strong>C#</strong> fundamentals in 6 hours - The most popular course with 50,000+ students, packed with tips and exercises!</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/csharp-fundamentals-dev?exp=2">Learn More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s4">
                    <div class="row">
                        <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                            <img alt="c#" src={img_html}></img>
                            <span class="card-title">HTML</span>
                            </div>
                            <div class="card-content">
                            <p>At the core of web development is a thorough knowledge of HTML. In this course, HTML Fundamentals, you’ll learn...</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/html-fundamentals?exp=2">Learn More</a>
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
                            <img alt="c#" src={angularimg}></img>
                            <span class="card-title">Angular Fundamentals</span>
                            </div>
                            <div class="card-content">
                            <p>Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals,...</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/angular-fundamentals?exp=2">Learn More</a>
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
                            <img alt="c#" src={reactimg}></img>
                            <span class="card-title">React: Getting Started</span>
                            </div>
                            <div class="card-content">
                            <p>Building efficient web and mobile interfaces is often challenging and requires the use of imperative logic.</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/react-js-getting-started?exp=2">Learn More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s4">
                    <div class="row">
                        <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                            <img alt="c#" src={srcmaster}></img>
                            <span class="card-title">Scrum Master Skills</span>
                            </div>
                            <div class="card-content">
                            <p>The Scrum Master role in an organization can be difficult. You live between a rock and a hard place. </p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/scrum-master-skills?exp=2">Learn More</a>
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
                            <img alt="c#" src={databaseimg}></img>
                            <span class="card-title">Database Delivery Best Practices</span>
                            </div>
                            <div class="card-content">
                            <p>Keeping track of your application's database is never an easy task. You will learn different approaches to database delivery...</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/database-delivery-best-practices?exp=2">Learn More</a>
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
                            <img alt="c#" src={cssimg}></img>
                            <span class="card-title">Introduction to CSS</span>
                            </div>
                            <div class="card-content">
                            <p>Description An Introduction to CSS will give you all the knowledge you need to start working with Cascading...</p>
                            </div>
                            <div class="card-action">
                            <a href="https://www.pluralsight.com/courses/css-intro?exp=2">Learn More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-more">
            </div>
        </div>
    </div>
</div>
    )

export default ItemList;