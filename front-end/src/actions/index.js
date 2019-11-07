import actionTypes from '../const/actionTypes';
import * as apiCaller from '../api/apiCaller'

export const getApi = (data) => {
  let objDate;
  if (data !== undefined) {
    objDate = {
      from_date: data.startTime,
      to_date: data.endTime
    }
  }
  return (dispatch) => {
    apiCaller.request_infused_by_params('/api/get_data_pie_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataPieChart(res.data, true))
        }
      })
    apiCaller.request_infused_by_params('/api/get_data_ranking_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataRankingChart(res.data, true))
        }
      })
    apiCaller.request_infused_by_params('/api/get_data_heat_map_chart', 'get', objDate)
      .then(res => {
        if (res.statusText === 'OK') {
          dispatch(getDataHeatMapChart(res.data, true))
        }
      })
  }
}

export const getDataPieChart = (data, checkResponse) => { return { type: actionTypes.getDataPieChart, data: data, checkResponse: checkResponse } }

export const getDataRankingChart = (data, checkResponse) => { return { type: actionTypes.getDataRankingChart, data: data, checkResponse: checkResponse } }

export const getDataHeatMapChart = (data, checkResponse) => { return { type: actionTypes.getDataHeatMapChart, data: data, checkResponse: checkResponse } }

export const setDateRangePicker = (data) => { return { type: actionTypes.setDateRangePicker, data: data } }

export const showLoading = () => { return { type: actionTypes.showLoading } }