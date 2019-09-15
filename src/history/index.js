import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../common/ErrorBoundary";
import Loading from "../common/loading";
import HistoryView from "./HistoryView";
import Api from "../services/api";
import { ssGetUser } from "../helpers/sessionStorage";

const History = props => {
  const [historyData, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userBinId = ssGetUser().binId;

  // get's the users history and updates the state
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await Api.getHistory(userBinId).catch(e => setError(true));
      const { history } = result.data;
      if (history && history.length) {
        setHistory(history);
      }
      setLoading(false);
    })();
  }, [props.historyUpdated, userBinId]);

  if (error) {
    return <ErrorBoundary error={"Wrong Api call"} />;
  }
  if (loading) {
    return <Loading />;
  }
  return <HistoryView data={historyData} loading={props.loading || loading} />;
};

const mapStateToProps = state => ({
  historyUpdated: state.historyUpdated,
  loading: state.loading
});

export default connect(mapStateToProps)(History);
