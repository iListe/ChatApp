import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends React.Component {
    state = {
        messages: [],
    };
    componentWillMount() {
    }
}
render() {
    return (
        <GiftedChat
            messages={this.state.messages}
            onSend={(message) => {
                Backend.sendMessage(message)
                //send message to backend
            }}
            user={{
                _id: Backend.getUid(),
                name: this.props.name,
            }}
        />
    );
}
componentDidMount(){
    Backend.loadMessages((message) => {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, message),
            };
        });
    });
}
componentWillMount(){
    Backend.closeChat();
}

Chat.defaultProps = {
    name: 'John',
};

Chat.PropTypes = {
    name: React.PropTypes.string
};

export default Chat;