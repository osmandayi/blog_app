import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext';

export default function CreateScreen({ navigation }) {
    const { addBlogPost } = useContext(Context);
    return (<BlogPostForm isButtonAction={'Kaydet'} onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Home'));
    }} />)
}

const styles = StyleSheet.create({})