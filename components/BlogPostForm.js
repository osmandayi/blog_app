import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({ onSubmit, initialValues, isButtonAction }) {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '');
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Başlığı Giriniz :</Text>
            <TextInput value={title} onChangeText={setTitle} style={styles.textInput} />
            <Text style={styles.label}>İçeriği Giriniz :</Text>
            <TextInput value={content} onChangeText={setContent} style={styles.textInput} />
            <TouchableOpacity style={styles.buttonMain} onPress={() => onSubmit(title, content)}>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>{isButtonAction}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    textInput: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#888',
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 18,
        marginBottom: 15,
    },
    label: {
        fontSize: 20,
        marginLeft: 10,
    },
    buttonMain: {
        padding: 30,
    },
    buttonView: {
        borderRadius: 20,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
})