import React from 'react';
import Three from './three';
import Two from './two';

export const ContextValue  =  React.createContext()
function One(props) {
    const[name,setName]=React.useState("Raju")
    const a = [200, 2, 40, 59, 1000, 5, 20]

    // console.log(a.length)
  
    let max = 0, min = 0;
  
    a.forEach((d) => {
      if (d > max) {
        max = d;
      }
      if (min < d) {
        min = d;
      }
    })
  
    // console.log(max, "max")
    // console.log(min, "min")
    let profit = 0, buy = 0, sell = 0, diff;
  
    for (let i = 0; i <= a.length - 1; i++) {
      for (let j = i + 1; j < a.length; j++) {
        diff = a[j] - a[i]
        if (diff > profit) {
          profit = diff;
          sell = a[j];
          buy = a[i];
        }
  
      }
    }
    // console.log("buy", buy)
    // console.log("sell", sell)
    // console.log("profit", profit)
    return (
        <div>
            <ContextValue.Provider value={name}>
                <Two   />
                <Three/>
            </ContextValue.Provider>
            {/* <Three>
                <h1 >sfddd</h1>
                <p>para</p>
            </Three> */}
        </div>
    );
}

export default One;