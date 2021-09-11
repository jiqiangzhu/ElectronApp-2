const UpdateTime = 'updateTime';
const MapDom = 'mapDom';
const ShowData = 'showdata';

// play pause music
function updateMap(newTime) {
  return {
    type: UpdateTime,
    payload: { newTime },
  };
}
// covid map
function setMapDom(mapDom) {
  return {
    type: MapDom,
    payload: { mapDom },
  };
}
// covid-19 show detail data
function setShowData(name, data) {
  return {
    type: ShowData,
    payload: { name, data },
  };
}
export {
  updateMap as updateMapRedux,
  setMapDom as setMapDomRedux,
  setShowData as setShowDataRedux,
  UpdateTime,
  MapDom,
  ShowData,
};
