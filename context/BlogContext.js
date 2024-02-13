import React from 'react'
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.round(Math.random() * 1000 + 1), title: action.payload.title, content: action.payload.content }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'get_blogpost':
            return action.payload
        default:
            return state;
    }
}
const addBlogPost = (dispatch) => {
    // setBlogPosts((currentPosts) => [...currentPosts, blog]);
    // setBlogPosts([...blogPosts, { title: 'Vue JS' }]);
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });

        if (callback) {
            callback();
        }
    };
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}
const editBlogPost = (dispatch) => {
    return (title, content, id, callback) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
}
const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        console.log("RESPONSE DATA :", response.data);
        dispatch({ type: 'get_blogpost', payload: response.data });
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);