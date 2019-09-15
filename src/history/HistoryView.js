import React from "react";
import PropTypes from "prop-types";
import Loading from "../common/loading";

const HistoryView = props => {
  const renderNoItems = () => {
    if (!props.data.length) {
      return <span>No items yet</span>;
    }
  };

  const renderHistory = () => {
    return (
      <>
        <h2>History</h2>
        {props.data.map((v, i) => (
          /*it'a a bad practice to put index as a key, 
          but this is a limitation of the API which isn't giving an ID, 
          and for this particular case, it's safe to use index
          */
          <div className="defaultBox historyItem" key={i}>
            <div className="historyStats">
              <p>
                speed: <b>{v.wpm}</b> wpm
              </p>
              <p>
                progress: <b>{v.progress}</b> %
              </p>
            </div>
            <div className="historyText">
              <span className="text-success">
                <b>{v.prevTxt}</b>
              </span>
              <span>{v.nextTxt}</span>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="gameHistory defaultBox">
      {props.loading ? (
        <Loading />
      ) : (
        <>
          {renderHistory()} {renderNoItems()}
        </>
      )}
    </div>
  );
};

const { arrayOf, exact, string, number, bool } = PropTypes;

HistoryView.propTypes = {
  data: arrayOf(
    exact({
      wpm: number,
      progress: number,
      prevTxt: string,
      nextTxt: string
    })
  ),
  loading: bool
};

HistoryView.defaultProps = {
  data: [],
  loading: false
};

export default HistoryView;
