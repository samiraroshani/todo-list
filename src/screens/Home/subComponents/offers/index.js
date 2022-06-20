import React from "react";
import {Row} from "../../../../elements";
import OfferItem from "./OfferItem";
import {AssetFilesName} from "../../../../assets/AssetFiles";

const Offers = () => {
  return (
    <Row style={{paddingHorizontal: 25, flexWrap: 'wrap'}}>
      <OfferItem/>
      <OfferItem title={'مخصوص سرخ کردنی'} icon={AssetFilesName.homeFire}/>
      <OfferItem title={'مخصوص شکم پر'} icon={AssetFilesName.homeFish}/>
      <OfferItem title={'مخصوص کباب'} icon={AssetFilesName.homeBullet}/>
      <OfferItem title={'مخصوص خورشت'} icon={AssetFilesName.homeCup}/>
      <OfferItem title={'مخصوص کباب'} icon={AssetFilesName.homeBullet}/>
    </Row>
  )
};

export default Offers;
