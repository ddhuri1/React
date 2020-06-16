const initState = {
    projects: [
        {id: 1, title: "aaa"},
        {id: 2, title: "bbb"}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            
    }
    return state
}

export default ProjectReducer;