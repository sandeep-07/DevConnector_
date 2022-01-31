import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Alert = () => {
  const dispatch = useDispatch();
  // const gst = useSelector((state) => state);
  const alert = useSelector((state) => state.alert);
  //   console.log("ye rha gst", gst);
  //   console.log("ye rhe alerts", gst.alerts);

  if (alert && alert.length > 0) {
    const x = alert.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
    return <div>{x}</div>;
  }
  return <div></div>;
};

export default Alert;
