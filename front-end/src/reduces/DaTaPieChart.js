import actionTypes from '../const/actionTypes';
import _ from 'lodash'
var initialState = {
  data: [],
  checkResponse: false,
  nameOsArr: []
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.getDataPieChart:
      return {
        data: action.data,
        checkResponse: action.checkResponse,
        nameOsArr: state.nameOsArr
      };

    case actionTypes.showLoading:
      return {
        data: state.data,
        checkResponse: false,
        nameOsArr: state.nameOsArr
      }

    case actionTypes.showLoadingPieChart:
      return {
        data: state.data,
        checkResponse: false,
        nameOsArr: state.nameOsArr
      }

    case actionTypes.getNameOsArr:
      state.nameOsArr = action.nameOsArr
      return state

    case actionTypes.setOsChoose:
      let indexOs = _.findKey(state.nameOsArr, ['x', action.nameOs]);
      state.nameOsArr[indexOs].isChoose = !state.nameOsArr[indexOs].isChoose
      return state;

    default:
      return state;
  }
}

export default myReducer;