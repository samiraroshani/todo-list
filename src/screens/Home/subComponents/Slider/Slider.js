import SliderItem from "./SliderItem";
import Promotion from "../../../../components/Promotion/Promotion";
import React from "react";

const Slider = ({data}) => {
  if (data && data.length > 0) {
    return (
      <Promotion>
        {data.map((item, index) => {
          return (
            <SliderItem
              key={`sliderItem${index}`}
              fullWidth={data.length === 1}
              title={item.title}
              imageUrl={item.icon_url}
            />
          )
        })}
      </Promotion>
    );
  }

  return null;
};

export default Slider;
