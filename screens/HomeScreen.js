import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const { state: blogPosts, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {

        getBlogPosts();

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        });
        return () => {
            listener.removeListener();
        }
    }, [])

    return (
        <View>
            {/* <Button title='Ekle' onPress={addBlogPost} /> */}
            <FlatList data={blogPosts} renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            } />

        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#888',
    },
    title: {
        fontSize: 18,
    }
})