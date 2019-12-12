import React from "react";
import "../App.css";

function Apod(props) {
  {
    if (!props.apod) return <h3>Loading...</h3>;
  }

  // export const Image = styled.img`
  //   width: 100%;
  //   /* height: 80%; */
  //   padding: 0%;
  //   margin: 0%;
  // `;

  // export const Container = styled.div`
  //   position: relative;
  //   text-align: center;
  //   color: white;
  // `;

  // export const Centerd = styled.div`
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   font-size: 1.2rem;
  // `;

  return (
    <div>
      {/* <img
        className='backgroundimg'
        style={{ height: `80vh` }}
        src={props.apod}></img> */}
    </div>
  );
}
export default Apod;
