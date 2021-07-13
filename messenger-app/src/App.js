import React from 'react';
import logo from './logo.svg';

import './components/style.css';
import './components/stylePhone.css';
import { MainMenu } from './components/mainMenu/MainMenu';
import { Message } from './components/message/Message';
import { MenuBarRecent } from './components/menuBarRecent/MenuBarRecent';
import {MenuBar} from './components/menuBar/MenuBar';
import {Conversation} from './components/conversation/Conversation'
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <div classNameName="App">
      <RecoilRoot>

    
<body className = "body"> 
    <main className="messenger">

        <span className="messenger__title">Messenger</span>


        <div className="icon-refresh">
            <img className="icon-refresh__component" src="assets/images/arrow.png" alt="Switch"/>
            <img className="icon-refresh__component" src="assets/images/arrow_below.png" alt="Switch"/>
            <img className="icon-refresh__component" src="assets/images/arrow_circle.png" alt="Switch"/>
        </div>


        <MenuBarRecent/>


        <MenuBar/>

        <div className="leftpage">
            <nav className="notification">
                <span className="notification__title">Messages</span>

                <img className="notification__number" src="assets/images/circle.png" alt="Notifications"/>
            </nav>

            <nav className="message-type">
                <a href="#" className="message-type__recent">Recent</a>
                <a href="#" className="message-type__pinned">Pinned</a>
            </nav>

            <Message></Message>

        </div>



        <div className="rightpage">

            <form className="search-form">
                <label className="search-form__label" for="search"> Search a contact </label>
                <input id="search" type="search" className="search-form__input"/>
                <button className="search-form__button">
                    <img src="assets/images/search.png" alt="Search"/>
                </button>
            </form>

            <div className="chat">

                <span className="chat__title">Conversation</span>
              <Conversation/>

                <form className="form-type">
                    <div className="form-type__icon-cancel">
                        <img className="form-type__icon-cancel-circle" src="assets/images/arrow_circle.png"
                            alt="Cancel message"/>
                        <img className="form-type__icon-cancel-pic" src="assets/images/Line1.png" alt="Cancel message"/>
                        <img className="form-type__icon-cancel-pic" src="assets/images/Line2.png" alt="Cancel message"/>

                    </div>
                    <input type="text" placeholder="Type your message" className="form-type__input"/>
                    <button className="form-type__button-send">
                        <img src="assets/images/send.png" alt="Send a message"/>
                    </button>
                    <button className="form-type__button">
                        <img src="assets/images/attachment.png" alt="Choose a file"/>
                    </button>
                    <button className="form-type__button">
                        <img src="assets/images/photo.png" alt="Choose a photo"/>
                    </button>
                </form>

            </div>

        </div>
    </main>
    </body>
    </RecoilRoot>
    </div>
  );
}

export default App;
