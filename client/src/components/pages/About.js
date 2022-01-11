import React from "react";
import aboutus from '../assets/aboutus.png'
import imgbot from '../assets/imagebot.png';
import enj_chat from '../assets/enjoy_chat.jpg';

const About = () => (
        <div className="container content-wrapper-about">
            <h1>About us</h1>
            <div className="box-wrapper">
                <div className="txt-description">In recent years, chatbots have been among the most sought-after solutions in a variety of sectors. These innovative services are entering the market at a rapid pace thanks to the rapid development of technologies such as artificial intelligence, machine learning and natural language processing technologies. A better user experience comes with deployment, which turns bots into well-understood tools capable of answering naïve customer queries in context.</div>
                <div className="some-content"><img src={aboutus}></img></div>
            </div>
            <div className="box-wrapper-left">
                <div className="txt-description-left">A good assistant to any user. A light and friendly interface that will improve the search in our system. Meet Connect, it is your personal assistant that will bring you into the world of digital marketing and online shopping. It will help you make the best choice for you.</div>
                <div className="some-content-left"><img src={imgbot}></img></div>
            </div>
            <div className="box-wrapper wrap-last">
                <div className="txt-description">Enjoy the conversation without wasting time. With quick questions, it also provides quick answers. This way you have quick access to the information you can find on the website, but with less effort on your part.</div>
                <div className="some-content-tr"><img src={enj_chat}></img></div>
            </div>

            <div className="calendar-wrapper-box">
            <div className="text-des-masterclass">
                <p className="master-class-strat">The Masterclass starts in March on 10 . The Masterclass will include live training and personal consultations. If you have a registration we will contact you soon, if you don't and want to register hurry because there are only 10 spots left.
                                                You can do it through our chat bot or call the phone number listed at the bottom of our page</p>
            </div>
            <div className="month">
                <ul>
                    <li>Marc</li>
                    <span className="year-master">2022</span>
                </ul>
            </div>
            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>
            <ul className="days">  
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li><span className="active">10</span></li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
            </ul>
            </div>
        </div>
    )

export default About;