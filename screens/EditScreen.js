import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext';

export default function EditScreen({ route, navigation }) {
    const { state, editBlogPost } = useContext(Context);
    const { id } = route.params;
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return (<BlogPostForm onSubmit={(title, content) => {
        editBlogPost(title, content, id, () => navigation.pop() /*bir önceki sayfaya aktarır*/);
    }} isButtonAction={'Güncelle'} initialValues={{ title: blogPost.title, content: blogPost.content }} />)
}

const styles = StyleSheet.create({})