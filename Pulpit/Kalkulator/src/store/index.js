import { createStore } from 'vuex';

const appStore = createStore({
    state() {
        return {
            width: '',
            height: '',
            winArea: '',
            winSizePrice: '',
            winProfile: '',
            winProfilePrice: '',
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
            winBlind: '',
            winBlindPrice: '',
            basketDisabled: false,
            Windows: []
        };
    },
    mutations: {
        setWidth(state, width) {
            state.width = width;
        },
        setHeight(state, height) {
            state.height = height;
        },
        setWinProfile(state, profile) {
            state.winProfile = profile;
        },
        setWinProfilePrice(state, profilePrice) {
            state.winProfilePrice = profilePrice;
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
        setWinBlind(state, winBlind) {
            state.winBlind = winBlind;
        },
        setWinBlindPrice(state, winBlindPrice) {
            state.winBlindPrice = winBlindPrice;
        },
        setBasketDisabled(state) {
            state.basketDisabled = true;
        },
        addNewWindow(state, window) {
            state.Windows.push(window);
        }
    },
    actions: {

    }
});


export default appStore;