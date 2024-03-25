import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const database = require('../Handlers/database.js');

const Meeting = props => {

    const post = props.post;

    const navigation = useNavigation();
    
    const onPress = () => {
        if (post.host_id) {
            try {
                database.addHostMeeting(post.host_id, post.id);
            } catch (error) {
                console.log('Error adding host meeting' + error);
            }
            alert('Meeting assigned to host!');
        } else {
            console.log(post.title);
        }
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 1}}>
                <Text style={styles.label}>Title</Text>
                <Text style={styles.label}>Location</Text>
                <Text style={styles.label}>Date</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.text} numberOfLines={1}>{post.title}</Text>
                <Text style={styles.text} numberOfLines={1}>{post.location}</Text>
                <Text style={styles.text} numberOfLines={1}>{post.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Meeting;