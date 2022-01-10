import React, { Component } from "react";
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';
import QuickReplies from "./QuickReplies";

import Message from "./Message";
import Card from "./Card";

const cookies = new Cookies();

class Chatbot extends Component {

    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);

        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        
        this.state = {
            messages: [],
            showBot: true,
            shopWelcomeSent: false
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
            //console.log(JSON.stringify(msg));
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
        if(this.talkInput ) {
            this.talkInput.focus();
        }
    }

    show(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: true});
    }

    hide(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: false});
    }

    resolveAfterXSeconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, x * 1000);
        })
    }

     async componentDidMount() {
        this.df_event_query('Welcome');

        if(window.location.pathname === '/shop') {
            await this.resolveAfterXSeconds(2);
            this.df_event_query('WELCOME_SHOP');
            this.setState({ shopWelcomeSent: true });
        }
    }

    _handleQuickReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        switch (payload) {
            case 'recommended_yes': 
                this.df_event_query('SHOW_RECOMMENDATIONS');
            case 'training_masterclass':
                this.df_event_query('MASTERCLASS');
                break;
            default:
                this.df_text_query(text);
                break;
        }

    }

    renderCards(cards) {
        return cards.map((card, i) => 
        <Card key={i} payload={card.structValue}/>
        );
    }

    renderOneMessage(message, i) {

        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
        } else if (message.msg && message.msg.payload.fields.cards) { //message.msg.payload.fields.cards.listValue.values

            return <div key={i}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        <div className="col s2">
                            <a href="/" className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>
                        </div>
                        <div style={{ overflowX: 'scroll', overflowY: 'auto'}}>
                            <div style={{ height: 300, width:message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if(message.msg &&
            message.msg.payload &&
            message.msg.payload.fields &&
            message.msg.payload.fields.quick_replies) {
                return <QuickReplies
                    text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                    key={i}
                    replyClick={this._handleQuickReplyPayload}
                    speaks={message.speaks}
                    payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
            }
    }

    renderMessages(stateMessages) {
        if(stateMessages) {
            return stateMessages.map((message, i) => {
                return this.renderOneMessage(message, i);
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
        if (this.state.showBot) {
        return (
            <div className="container chat-bot-wrapper" style={{ height: 500, width: 400, position: 'absolute', bottom: 0, right: 0, border: '1px solid lightgray'}}>
                <nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo">Chatbot</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={this.hide}>Close</a></li>
                        </ul>
                    </div>
                </nav>
                <div id="chatbot chatbot-show" style={{ height: 388, width: '100%', overflow: 'auto' }}>
                    
                    {this.renderMessages(this.state.messages)}
                    <div ref={(el) => { this.messagesEnd = el; }}
                        style={{clear: "both"}}>
                    </div>
                </div>
                <div className="col s12">
                    <input class="type-message" placeholder="Type a message..." type="text" ref={(input) => { this.talkInput = input; }}  onKeyPress={this._handleInputKeyPress}  />
                </div>
            </div>
        )
        } else {
            return (
                <div className="container close-chat" style={{ minHeight: 40, maxHeight: 500}}>
                    <nav>
                        <div className="nav-wrapper">
                            <a className="brand-logo">Chatbot</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={this.show}>Show</a></li>
                        </ul>
                        </div>
                    </nav>
                    <div ref={(el => {
                        this.messagesEnd = el;
                    })} style={{ float: "left", clear: "both" }}>

                    </div> 
                </div>
            );
        }
    }
}
        


export default Chatbot;