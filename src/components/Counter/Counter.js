import React, {useState, useRef, useEffect} from "react";
import Text from "../../elements/Text";
import Row from "../../elements/Row";
import View from "../../elements/View";
import {typography} from "../../themes";
import {ConvertNumbers} from "../../helpers/Helper";

const Counter = ({isPink, sec, parentCallback, reset}) => {
  const [timerSec, setTimerSec] = useState(sec);
  const [timerMin, setTimerMin] = useState(0);
  const [timerHour, setTimerHour] = useState(0);

  useEffect(() => {
    if (sec >= 3600) {
      setTimerHour(Math.floor(sec / 3600));
      setTimerMin(Math.floor((sec % 3600) / 60));
      setTimerSec(Math.floor((sec % 3600) % 60));
    } else {
      setTimerMin(Math.floor(sec / 60));
      setTimerSec(Math.floor(sec % 60));
    }
  }, [reset]);

  const id = useRef(null);
  const clear = () => {
    clearInterval(id.current)
  };

  useEffect(() => {
    id.current = setInterval(() => {
      setTimerSec((time) => time - 1)
    }, 1000);
    return () => clear()
  }, [reset]);

  useEffect(() => {
    if (timerSec === 0 && timerMin === 0 && timerHour === 0) {
      parentCallback(true);
      clear()
    } else if (timerSec === -1 && timerMin !== 0) {
      setTimerSec(59);
      setTimerMin((time) => time - 1)
    } else if (timerSec === -1 && timerMin === 0 && timerHour !== 0) {
      setTimerSec(59);
      setTimerMin(59);
      setTimerHour((time) => time - 1)
    }
  }, [timerSec]);

  if (sec === 0) {
    return null;
  }

  return (
    <Row style={{flexDirection: 'row'}}>
      {sec >= 3600 ? (
        <>
          <View style={{
            width: 36,
            height: 36,
            backgroundColor: isPink ? '#f27baa' : "#2e3192",
            borderRadius: 7,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Text style={{
              color: isPink ? '#2e3192' : "#fff",
              lineHeight: 32,
              fontSize: 16,
              fontFamily: typography.bold
            }}>{ConvertNumbers(timerHour < 10 ? "0" + timerHour : timerHour)}</Text>
          </View>
          <Text
            style={{
              color: isPink ? '#f27baa' : "#2e3192",
              marginHorizontal: 5,
              lineHeight: 32,
              fontSize: 16,
              fontFamily: typography.bold
            }}>:</Text>
        </>
      ) : null}
      <View style={{
        width: 36,
        height: 36,
        backgroundColor: isPink ? '#f27baa' : "#2e3192",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          color: isPink ? '#2e3192' : "#fff",
          lineHeight: 32,
          fontSize: 16,
          fontFamily: typography.bold
        }}>{ConvertNumbers(timerMin < 10 ? "0" + timerMin : timerMin)}</Text>
      </View>
      <Text
        style={{
          color: isPink ? '#f27baa' : "#2e3192",
          marginHorizontal: 5,
          lineHeight: 32,
          fontSize: 16,
          fontFamily: typography.bold
        }}>:</Text>
      <View style={{
        width: 36,
        height: 36,
        backgroundColor: isPink ? '#f27baa' : "#2e3192",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          color: isPink ? '#2e3192' : "#fff",
          lineHeight: 32,
          fontSize: 16,
          fontFamily: typography.bold
        }}>{ConvertNumbers(timerSec < 10 ? "0" + timerSec : timerSec)}</Text>
      </View>
    </Row>
  )
};

export default Counter;

Counter.defaultProps = {
  isPink: false,
  sec: 0,
  parentCallback: () => {
  }
}
