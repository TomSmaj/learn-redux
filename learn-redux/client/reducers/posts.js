// a reducer takes in two things:
// 1.) the action (info about what happens)
// 2.) a copy of current state

function posts(state = [], action){
    console.log("The post will change");
    console.log(state, action);
    return state;
}

export default posts;