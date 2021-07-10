import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainMenu } from './components/mainMenu/MainMenu';

function App() {
  return (
    <div classNameName="App">
      <MainMenu></MainMenu>
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    

    <main className="messenger">

        <span className="messenger__title">Messenger</span>


        <div className="icon-refresh">
            <img className="icon-refresh__component" src="assets/images/arrow.png" alt="Switch"/>
            <img className="icon-refresh__component" src="assets/images/arrow_below.png" alt="Switch"/>
            <img className="icon-refresh__component" src="assets/images/arrow_circle.png" alt="Switch"/>
        </div>


        <div className="menu-bar--recent">
            <div className="icon-phone">
                <a href="#" className="">
                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Contacts"/>
                    <img className="icon-phone__pic" src="assets/images/bubble_phone.png" alt="Messages"/>
                    <span className="icon-phone__description">Messages</span>
                </a>
            </div>
            <div className="icon-phone">
                <a href="#" className="">
                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Dark mode"/>
                    <img className="icon-phone__pic" src="assets/images/moon_phone.png" alt="Dark mode"/>
                    <span className="icon-phone__description">Dark mode</span>
                </a>
            </div>

        </div>


        <div className="menu-bar">

            <div className="menu-bar__icon menu-bar__icon-m">
                <a href="#" className="">
                    <img src="assets/images/M.png" alt="Menu"/>
                </a>
            </div>
            <div className="menu-bar__icon ">
                <a href="#" className="">
                    <img src="assets/images/bubble.png" alt="Chat with people"/>
                </a>
            </div>
            <div className="menu-bar__icon ">
                <a href="#" className="">
                    <img src="assets/images/people.png" alt="Go to groups"/>
                </a>
            </div>
            <div className="menu-bar__icon--dark-mode">
                <a href="#" className="">
                    <img src="assets/images/moon.png" alt="Moon"/>
                </a>
            </div>
            
            <div className="icon-phone">
                <a href="#" className="">
                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Choose a photo"/>
                    <img className="icon-phone__pic photo" src="assets/images/photo_phone.png" alt="Choose a photo"/>
                    <span className="icon-phone__description">Photo</span>

                </a>
            </div>


            <div className="icon-phone">
                <a href="#" className="">

                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Choose a file"/>
                    <img className="icon-phone__pic" src="assets/images/attachment_phone.png" alt="Choose a file"/>
                    <span className="icon-phone__description">File</span>
                </a>
            </div>
            <div className="icon-phone">
                <a href="#" className="">
                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Contacts"/>
                    <img className="icon-phone__pic" src="assets/images/people_phone.png" alt="Contacts"/>
                    <span className="icon-phone__description">Contacts</span>
                </a>
            </div>
            <div className="icon-phone">
                <a href="#" className="">
                    <img className="icon-phone__circle" src="assets/images/menu_circle.png" alt="Dark mode"/>
                    <img className="icon-phone__pic dark-mode" src="assets/images/moon_phone.png" alt="Dark mode"/>
                    <span className="icon-phone__description">Dark mode</span>
                </a>
            </div>

        </div>

        <div className="leftpage">
            <nav className="notification">
                <span className="notification__title">Messages</span>

                <img className="notification__number" src="assets/images/circle.png" alt="Notifications"/>
            </nav>

            <nav className="message-type">
                <a href="#" className="message-type__recent">Recent</a>
                <a href="#" className="message-type__pinned">Pinned</a>
            </nav>

            <div className="message">
                <div className="message__picture">

                    <img src="assets/images/profile_pic.png" alt="Profile picture"/>
                </div>

                <span className="message__name">Artur Towish</span>
                <small className="message__time">1h ago</small>

                <span className="message__content">Some sample message</span>
            </div>

            <div className="message">
                <div className="message__picture">

                    <img src="assets/images/profile_pic.png" alt="Profile picture"/>
                </div>

                <span className="message__name">Nix Golddigger</span>
                <small className="message__time">2h ago</small>

                <span className="message__content">Second Some sample message</span>


            </div>
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
                <div className="conversation">

                    <div className="conversation-picture conversation--received">
                        <img className="" src="assets/images/profile_pic.png" alt="Profile picture"/>
                    </div>

                    <div className="conversation-messages conversation--received">

                        <div className="conversation-message">
                            <p className="conversation-message__text desktop">Ahojky</p>
                        </div>
                        <div className="conversation-message">
                            <p className="conversation-message__text desktop">Cawky</p>
                        </div>
                        <div className="conversation-message conversation-message--phone1">
                            <p className="conversation-message__text">Some very long sample message that takes more space
                            </p>
                        </div>
                    </div>
                    <div className="conversation-messages">
                        <div className="conversation-message">
                            <p className="conversation-message__text desktop">Ahojky</p>
                        </div>
                        <div className="conversation-message">
                            <p className="conversation-message__text desktop">Ahojky</p>
                        </div>
                        <div className="conversation-message conversation-message--phone2">
                            <p className="conversation-message__text">Sample message that takes more space</p>
                        </div>
                    </div>

                    <div className="conversation-picture ">
                        <img className="" src="assets/images/profile_pic.png" alt="Profile picture"/>
                    </div>
                </div>

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
    </div>
  );
}

export default App;
