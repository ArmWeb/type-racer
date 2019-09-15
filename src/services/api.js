import axios from "axios";

const textApi = `https://baconipsum.com/api`;
const dbApi = `https://api.myjson.com/bins`;

class Api {
  getText = () => axios.get(`${textApi}/?type=filler&sentences=1&format=text`);

  saveGame = (wpm = 0, progress = 0) => axios.post(dbApi, { wpm, progress });

  getHistory = userBinId => axios.get(`${dbApi}/${userBinId}`);

  updateHistory = (userBinId, data) => axios.put(`${dbApi}/${userBinId}`, data);
}

export default new Api();
