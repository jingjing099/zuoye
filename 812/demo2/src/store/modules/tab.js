const state={
    title:''
}
const mutations={
    title(state,obj){
        state.title=obj
        console.log(state.title);
    }
}
export default{
    namespaced: true,
    state,
    mutations
}