import { createStore } from 'vuex';

const appStore = createStore({
    state() {
        return {
            width: '',
            height: '',
            winArea: '',
            winSizePrice: '',
            winType: '',
            winGlass: '',
            winColor: '',
            winVenner: '',
            winVennerPrice: '',
            winGlassPrice: '',
            winFrame:'',
            winFramePrice: '',
            winMuntins: '',
            winMuntinsPrice: '',
            winDiffuser: '',
            winDiffuserPrice: '',
            basketDisabled: false
        };
    },
    mutations: {
        setWidth(state, width) {
            state.width = width;
        },
        setHeight(state, height) {
            state.height = height;
        },
        setWinArea(state, winArea) {
            state.winArea = winArea;
        },
        setWinType(state, winType) {
            state.winType = winType;
        },
        setWinGlass(state, winGlass) {
            state.winGlass = winGlass;
        },
        setWinColor(state, winColor) {
            state.winColor = winColor;
        },
        setWinSizePrice(state, winSizePrice) {
            state.winSizePrice = winSizePrice;
        },
        setWinVenner(state, winVenner) {
            state.winVenner = winVenner; 
        },
        setWinVennerPrice(state, winVennerPrice) {
            state.winVennerPrice = winVennerPrice; 
        },
        setWinGlassPrice(state, winGlassPrice) {
            state.winGlassPrice = winGlassPrice; 
        },
        setWinFrames(state, winFrame) {
            state.winFrame = winFrame;
        },
        setWinFramePrice(state, winFramePrice) {
            state.winFramePrice = winFramePrice;
        },
        setWinMuntins(state, winMuntins) {
            state.winMuntins = winMuntins;
        },
        setWinMuntinsPrice(state, winMuntinsPrice) {
            state.winMuntinsPrice = winMuntinsPrice;
        },
        setDiffuser(state, winDiffuser) {
            state.winDiffuser = winDiffuser;
        },
        setDiffuserPrice(state, winDiffusersPrice) {
            state.winDiffuserPrice = winDiffusersPrice;
        },
        setBasketDisabled(state) {
            state.basketDisabled = true;
        }
    },
    actions: {

    }
});


export default appStore;