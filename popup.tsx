import { useRef } from "react";
import { memo } from "react";
import React, { useEffect, useState } from "react";
const IndexPopup = memo(function IndexPopup() {
  const data = useRef("");
  useEffect(() => {
    chrome.runtime.openOptionsPage();
  });
  return <div style={{
    display: "flex",
    flexDirection: "column",
    padding: 16
  }}>
      <h2>
This is a popup
      </h2>
    </div>;
});
export default IndexPopup;