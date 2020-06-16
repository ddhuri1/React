export const createProject = (project) =>{
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            link: 'scscsdcdc',
            id: 1234
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project})
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERR", err})
        });
        
    }
};