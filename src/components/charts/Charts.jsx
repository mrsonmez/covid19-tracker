import React, { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { covidGlobalAsyncThunk } from "./../../redux/slice/covidSlice";
export default function Charts() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state.dataSelector);

  useEffect(() => {
    dispatch(covidGlobalAsyncThunk(dataSelector));
  }, []);

  console.log(items);
  return (
    <>
      {items.map((item) => {
        return (
          <div className="chartContainer">
            <div className="chartOne">
              <h5>Infected</h5>
              <NumericFormat
                displayType="text"
                thousandSeparator=","
                value={item.confirmed.value}
                renderText={(values) => (
                  <span className="values">{values}</span>
                )}
              />

              <p>Last Updated at:</p>
              <p>{item.lastUpdate}</p>
              {dataSelector && <h3>{dataSelector}</h3>}
            </div>
            <div className="chartTwo">
              <h5>Recovered</h5>
              <NumericFormat
                displayType="text"
                thousandSeparator=","
                value={item.recovered.value}
                renderText={(values) => (
                  <span className="values">{values}</span>
                )}
              />
              <p>Last Updated at:</p>
              <p>{item.lastUpdate}</p>
              {dataSelector && <h3>{dataSelector}</h3>}
            </div>
            <div className="chartThree">
              <h5>Deaths</h5>
              <NumericFormat
                displayType="text"
                thousandSeparator=","
                value={item.deaths.value}
                renderText={(values) => (
                  <span className="values">{values}</span>
                )}
              />
              <p>Last Updated at:</p>
              <p>{item.lastUpdate}</p>
              {dataSelector && <h3>{dataSelector}</h3>}
            </div>
            <div className="chartFour">
              <h5>Active</h5>
              <NumericFormat
                displayType="text"
                thousandSeparator=","
                value={item.confirmed.value - item.deaths.value}
                renderText={(values) => (
                  <span className="values">{values}</span>
                )}
              />
              <p>Last Updated at:</p>
              <p>{item.lastUpdate}</p>
              {dataSelector && <h3>{dataSelector}</h3>}
            </div>
          </div>
        );
      })}
    </>
  );
}
