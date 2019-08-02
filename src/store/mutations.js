export default {

    loginStart: state => state.loggingIn = true,

    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },

    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },

    logout: (state) => {
      state.accessToken = null;
    },

    updateFolders:(state, dataFolders) => {
        state.folders = dataFolders;
    },

    updateTargetFolder:(state, dataTargetFolder) => {
      state.targetFolder = dataTargetFolder;
    },

    updateBinders:(state, dataBinders) =>{
      state.binders = dataBinders;
    },

    updateTargetBinder:(state, dataTargetBinder) => {
      state.targetBinder = dataTargetBinder;
    },

    clear:(state) =>{
      state.targetFolder= '';
      state.binders= '';
    },

};
