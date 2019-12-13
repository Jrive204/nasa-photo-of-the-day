import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";

export default function Forms({
  onSubmityr,
  handleyrchange,
  onSubmitmth,
  handledaychange,
  handlemonthchange,
  onSubmitdy
}) {
  //   [
  //     onSubmityr,
  //     handleyrchange,
  //     onSubmitmth,
  //     handledaychange,
  //     handlemonthchange,
  //     onSubmitdy
  //   ] = props;

  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-evenly`,
        padding: `1%`
      }}>
      <form onSubmit={onSubmityr}>
        <input
          placeholder={`Type Year`}
          type='text'
          name='year'
          onChange={handleyrchange}
        />
      </form>
      <form onSubmit={onSubmitmth}>
        <input
          placeholder={`Type Month`}
          type='text'
          name='month'
          onChange={handlemonthchange}
        />
      </form>
      <form onSubmit={onSubmitdy}>
        <input
          placeholder={`Type Day`}
          type='text'
          name='day'
          onChange={handledaychange}
        />
      </form>
    </div>
  );
}
