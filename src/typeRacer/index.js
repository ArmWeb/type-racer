import React, { useState, useEffect, memo, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Api from "../services/api";
import Game from "./Game";
import Loading from "../common/loading";
import { notifyHistoryUpdated } from "../actions/historyAction";
import { globalLoading } from "../actions/common";
import { ssGetUser } from "../helpers/sessionStorage";
import ErrorBoundary from "../common/ErrorBoundary";
import { formatMinSec } from "../helpers/time";
import { useInterval } from "../helpers/interval.js";
import { calculateWPM, calculateProgress } from "../helpers/calcs";
import { generateHistoryData } from "./userHistoryHelper";

const SECONDS = 10;

const TypeRacer = memo(props => {
  const { globalLoading, notifyHistoryUpdated } = props;

  const [start, setStart] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(SECONDS);
  const [parts, setParts] = useState({ prevText: "" });
  const [wpm, setWpm] = useState(0);
  const [progress, setProgress] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [textData, setTextData] = useState("");

  const startGame = async () => {
    setLoading(true);
    let text = await Api.getText().catch(e => setError(true));
    setStart(true);
    setDelay(1000);
    setTextData(text.data);
    setLoading(false);
  };

  //update time, progress and wpm every second
  useInterval(() => {
    if (textData.length && start) {
      if (seconds < SECONDS) {
        setWpm(calculateWPM(parts.prevText.length, SECONDS - seconds));
        setProgress(calculateProgress(parts.prevText.length, textData.length));
      }
      setSeconds(seconds - 1);
    }
  }, delay);

  useEffect(() => {
    const saveGame = async () => {
      globalLoading(true, "HISTORY");
      const userBinId = ssGetUser().binId;
      const userData = await Api.getHistory(userBinId).catch(e =>
        setError(true)
      );

      const userObj = { ...userData.data };
      const userHistory = generateHistoryData(userObj, parts, wpm, progress);

      await Api.updateHistory(userBinId, userHistory).catch(e =>
        setError(true)
      );
      notifyHistoryUpdated();
      globalLoading(false, "HISTORY");
    };

    const resetGame = () => {
      setStart(false);
      setProgress(0);
      setWpm(0);
      setSeconds(SECONDS);
      setDelay(null);
      setTextData("");
      setParts({ prevText: "" });
    };

    if (seconds === 0 || progress === 100) {
      saveGame();
      resetGame();
    }
  }, [seconds, progress, parts, wpm, globalLoading, notifyHistoryUpdated]);

  const receiveData = useCallback(data => setParts(data), []);

  return (
    <div className="game defaultBox" data-testid="gameContainer">
      {error ? (
        <ErrorBoundary error={"Wrong Api call"} />
      ) : loading ? (
        <Loading />
      ) : !start ? (
        <button
          className="btn btn-default"
          data-testid="startGame"
          onClick={startGame}
        >
          Play
        </button>
      ) : start ? (
        <>
          <p>{formatMinSec(seconds)}</p>
          <p>speed: {wpm} wpm</p>
          <p>Your progress: {progress}%</p>
          <Game start={start} text={textData} sendData={receiveData} />
        </>
      ) : null}
    </div>
  );
});

TypeRacer.propTypes = {
  globalLoading: PropTypes.func,
  notifyHistoryUpdated: PropTypes.func
};

export default connect(
  null,
  { notifyHistoryUpdated, globalLoading }
)(TypeRacer);
