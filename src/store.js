import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import mutations from './store/mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    accessToken: null,
    loggingIn: false,
    loginError: null,

    library:{
      user:String,
      folders:[
        {
            name: String,
            binders:[
                {
                    name:String,
                    description:String,
                    markets:[
                        {
                            name:String
                        }
                    ],
                    charges:[
                        {
                            name:String
                        }
                    ],
                    questions:[
                        {
                            question:String
                        }
                    ],
                    tables:{
                        quantitative_sales:{
                            tabs:[
                                {
                                    market_id: String,
                                    type: String,
                                    lines:[
                                        {
                                            volume: Number,
                                            price: Number
                                        }
                                    ]
                                }
                            ]
                        },
                         
                    }
                }
            ]  
        }
    ]
    },
    targetFolder: '',
    targetBinder: '',
  },
  

  mutations,

  actions,

});