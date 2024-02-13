import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        // const [blogPosts, setBlogPosts] = useState([{ title: 'Javascript' }, { title: 'React Native' }]);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        // action === {addBlogPost: (dispatch) => {return () = {}}}

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }


    return { Context, Provider }
}