import React from "react";
import {Row, View, Text, Divider} from '../../../elements'
import {CommentItemStyle} from "./CommentItem.style";
import {AssetFilesName} from "../../../assets/AssetFiles";
import AssetsComponent from "../../../assets";

const CommentItem = (props) => {
  const {title, dateTime, comment, isReply} = props;
  return (
    <View style={isReply ? CommentItemStyle.replyComment : CommentItemStyle.commentContainer}>
      <Row style={CommentItemStyle.descriptionWrapper}>
        <Row style={CommentItemStyle.detailWrapper}>
          <Text numberOfLines={1} style={CommentItemStyle.textDescription}>
            {title}
          </Text>
          <AssetsComponent
            name={AssetFilesName.profile}
            width={23}
            height={23}
            resizemode={'contain'}
          />
        </Row>
        <Row style={CommentItemStyle.timeWrapper}>
          <AssetsComponent
            name={AssetFilesName.clock}
            width={10}
            height={10}
            resizemode={'contain'}
            style={CommentItemStyle.time}
          />
          <Text style={CommentItemStyle.dateStyle}>
            {dateTime}
          </Text>
        </Row>
        <View>
          <AssetsComponent
            name={AssetFilesName.reply}
            width={10}
            height={10}
            resizemode={'contain'}
            style={CommentItemStyle.reply}/>
        </View>
      </Row>
      <Row style={CommentItemStyle.commentWrapper}>
        <Text style={CommentItemStyle.comment}>
          {comment}
        </Text>
      </Row>
      {isReply ? null : <Divider style={{backgroundColor: "#b3b3b3", marginTop: 10, marginHorizontal: 0}}/>}
    </View>
  )
}
export default CommentItem;
