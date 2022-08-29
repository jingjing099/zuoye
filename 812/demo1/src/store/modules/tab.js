import router from '../../router/index.js'
const state={
    list:[],
    flist:[],
    rou:'', //点击的路由
    val:'', //关闭其他或者是关闭所有
    tablist:[]
}
const mutations={
    // 全部已读消息
    allrecycle(state){
        state.tablist.unread=[...state.tablist.unread,...state.tablist.recycle]
        // console.log([...state.tablist.read,...state.tablist.unread]);
        state.tablist.recycle=[]
    },
    // 全部已读消息
    allread(state){
        state.tablist.recycle=[...state.tablist.recycle,...state.tablist.read]
        // console.log([...state.tablist.read,...state.tablist.unread]);
        state.tablist.read=[]
    },
    // 全部标记已读
    allunread(state){
        state.tablist.read=[...state.tablist.read,...state.tablist.unread]
        // console.log([...state.tablist.read,...state.tablist.unread]);
        state.tablist.unread=[]
    },
    // 还原
    recyclebin(state,obj){
        let item=state.tablist.recycle[obj]
        state.tablist.unread.push(item)
        state.tablist.recycle.splice(obj,1)
    },
    estoreunread(state,obj){
        let item=state.tablist.read[obj]
        state.tablist.unread.push(item)
        state.tablist.read.splice(obj,1)
    },
    // 已读消息
    readmessage(state,obj){
        let item=state.tablist.read[obj]
        state.tablist.recycle.unshift(item)
        state.tablist.read.splice(obj,1)
        // console.log(state.tablist);
    },
    // tab的标记已读
    markread(state,obj){
        let item=state.tablist.unread[obj]
        state.tablist.read.unshift(item)
        state.tablist.unread.splice(obj,1)
        console.log(state.tablist);
    },
    add(state,obj){
        console.log(obj);
        state.flist.unshift(obj.i)
        state.list = [...new Set(state.flist)]
        console.log(state.list);
        // state.rou=obj.i
    },
    del(state,i){
        state.list.splice(i,1)
    },
    lu(state,obj){
        console.log(obj);
        state.rou=obj
    },
    val(state,obj){
        state.val=obj
        if(state.val=='关闭其他'){
            state.list=state.flist.filter(item=>item.i==state.rou)
        }else{
            state.list=''
            state.flist=''
            router.push({path:'/table'})
        }
    },
    // tab的数据
    tabadd(state,obj){
        state.tablist=obj
    }
}
export default{
    namespaced: true,
    state,
    mutations
}