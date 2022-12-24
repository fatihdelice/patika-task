import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './Rooms.style'
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInput';
import RoomCard from '../../components/RoomCard';
import parseContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Rooms = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);
  
    useEffect(() => {
      database()
        .ref('rooms/')
        .on('value', snapshot => {
          const contentData = snapshot.val();
          const parsedData = parseContentData(contentData || {});
          setContentList(parsedData);
          console.log(parsedData);
        });
    }, []);
  
    const handleInputToggle = () => {
      setInputModalVisible(!inputModalVisible);
    };
  
    const handleSendContent = content => {
      handleInputToggle();
      sendContent(content);
    };
  
    const sendContent = content => {
      const userMail = auth().currentUser.email;
      const contentObject = {
        text: content,
        username: userMail.split('@')[0],
        date: new Date().toISOString(),
      };
      console.log(contentObject);
      database().ref('rooms/').push(contentObject);
    };

    const renderContent = ({item}) => (
      <RoomCard name={item}/>
    );

    return (
        <View style={styles.container}>
            <FlatList data={contentList} renderItem={renderContent} />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
        </View>
    )
}

export default Rooms