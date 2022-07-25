import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';

class Chat extends React.Component {
    state = {
        messages: []
    };
    render() {
        return (
            <GiftedChat
            messages={this.state.messages}
            onSend={(message) => {
                //send message to backend
            }}
            user={{
                _id: 1,
            }}
         />
        );
    }
}

Chat.defaultProps = {
    name: 'John',
};

Chat.PropTypes ={
    name: React.PropTypes.string
};

export default Chat;