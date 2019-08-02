import axios from 'axios';
import router from '../router';

export default { 

    doLogin({ commit }, loginData) {
        commit('loginStart');
        axios.post('http://localhost:3000/api/user/login', {
        ...loginData
        })
        .then(response => {
            localStorage.setItem('accessToken', response.data);
            commit('loginStop', null);
            commit('updateAccessToken', response.data);
            router.push('/');
        })
        .catch(error => {
            commit('loginStop', error.response.data.error);
            commit('updateAccessToken', null);
        })
    },

    fetchAccessToken({ commit }) {
        commit('updateAccessToken', localStorage.getItem('accessToken'));
    },

    logout({ commit }) {
        localStorage.removeItem('accessToken');
        commit('logout');
        router.push('/login');
    },


    loadFolders({commit}){
        axios.get('http://localhost:3000/api/folder/get',{
          headers: {'accessToken': this.state.accessToken}
        }).then(response => {
          commit('updateFolders', response.data.folder.reverse());
        });
    },

    keepFolder({ commit }, dataTargetFolder){
        commit('updateTargetFolder', dataTargetFolder)
        console.log(dataTargetFolder)
        axios.get('http://localhost:3000/api/binder/get',{
            params: {id: this.state.targetFolder._id}
        })
        .then(response => { 
            const dataBinders = response.data.binder.reverse();
            commit('updateBinders', dataBinders);

        });
    },
    createFolder({dispatch}, submitFolder){
        axios.post('http://localhost:3000/api/folder/new', {
        name : submitFolder,
        },{
          headers: {'accessToken': this.state.accessToken}, 
        })
        .then(() => { 
            dispatch('loadFolders');
        });
    },
    deleteFolder({dispatch}){
        axios.delete('http://localhost:3000/api/binder/delete/all', {
          params: { 'id': this.state.targetFolder._id }, 
        })
        axios.delete('http://localhost:3000/api/folder/delete', {
          params: { 'id': this.state.targetFolder._id }, 
        })
        .then(() => { 
            dispatch('loadFolders');
        });
    },
    editFolder({commit, dispatch}, editedName){
        axios.put('http://localhost:3000/api/folder/edit', {
        name : editedName,
        },{
          params: { 'id': this.state.targetFolder._id }, 
        })
        .then(() => { 
            dispatch('loadFolders');
        });
    },

    
    loadBinders({commit}){
        axios.get('http://localhost:3000/api/binder/get',{
            params: {id: this.state.targetFolder._id}
        })
        .then(response => { 
            const dataBinders = response.data.binder.reverse();
            commit('updateBinders', dataBinders);

        });
    },
    keepBinder({ commit }, dataTargetBinder){
        commit('updateTargetBinder', dataTargetBinder)

    },
    createBinder({dispatch}, submitBinder){
        axios.post('http://localhost:3000/api/binder/new', {
        name : submitBinder.name,
        description : submitBinder.description,
        folder : this.state.targetFolder._id,
        })
        .then(() => { 
            dispatch('loadBinders');
        });
    },
    deleteBinder({dispatch}){
        axios.delete('http://localhost:3000/api/binder/delete', {
          params: { 'id': this.state.targetBinder._id }, 
        })
        .then(() => { 
            dispatch('loadBinders');
        });
    },
    editBinder({dispatch}, editedBinder){
        axios.put('http://localhost:3000/api/binder/edit', {
        name : editedBinder.name,
        description: editedBinder.description
        },{
          params: { 'id': this.state.targetBinder._id }, 
        })
        .then(() => { 
            dispatch('loadBinders');
        });
    },
    clearData({commit}){
        commit('clear');
    },
    createMarket({dispatch}, submitMarket){
        axios.put('http://localhost:3000/api/binder/market/new', {
        name : submitMarket,
        },{
        params: { 'id': this.state.targetBinder._id }, 
        })
        .then(() => { 
            dispatch('loadBinders');
        });
    },


};
