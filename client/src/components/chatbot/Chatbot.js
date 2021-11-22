import React, { Component } from "react";
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from "./Message";

const cookies = new Cookies();

class Chatbot extends Component {

    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);

        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this.state = {
            messages: []
        };

        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), { path: '/' });
        }

        console.log(cookies.get('userID'));
    }

    async df_text_query(queryText) {
        let says = {
            speaks: 'me',
            msg: {
                text: {
                    text: queryText
                }
            }
        };

        this.setState({messages: [...this.state.messages, says]}); // kokatinira new messages and says
        const res = await axios.post('/api/df_text_query', { text: queryText, userID: cookies.get('userID') });

        for (let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    }

    async df_event_query(eventName) {
        const res = await axios.post('/api/df_event_query', {event: eventName, userID: cookies.get('userID') });

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behaviour: "smooth" });
        this.talkInput.focus();
    }

    componentDidMount() {
        this.df_event_query('Welcome');
    }

    renderMessages(stateMessages) {
        if(stateMessages) {
            return stateMessages.map((message, i) => {
                return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
            });
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e) {
        if(e.key === 'Enter' ) {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="container" style={{ height: 400, width: 400, float: "right" }}>
                <div id="chatbot" style={{ height: '100%', width: '100%', overflow: 'auto' }}>
                    <h2>ChatBot</h2>
                    {this.renderMessages(this.state.messages)}
                    <div ref={(el) => { this.messagesEnd = el; }}
                        style={{clear: "both"}}>
                    </div>
                    <input type="text" ref={(input) => { this.talkInput = input; }}  onKeyPress={this._handleInputKeyPress}  />
                </div>
            </div>
        )
    }
}
        


export default Chatbot;