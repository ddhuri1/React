const initState = {}

const ProjectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project success');
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error');
            return state;
        default:
            return state;   
    }
}

export default ProjectReducer;