import React, {useState} from "react";
import {View} from "react-native";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import TextIcon from "../TextIcon";
import {typography} from "../../themes";
import {Divider} from "../../elements";

const CollapseUI = (props) => {
  const [expanded, setExpanded] = useState(false);
  const {iconName, headerTitle, children} = props;
  return (
    <View>
      <Collapse
        isExpanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}>
        <CollapseHeader>
          <TextIcon
            containerStyle={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            textStyle={{
              fontFamily: typography.primary,
              fontSize: 16,
              lineHeight: 43,
              color: "#2e3192"
            }}
            title={headerTitle}
            iconName={iconName}
            iconStyle={{marginHorizontal: 20}}
          />
        </CollapseHeader>
        <CollapseBody style={{marginHorizontal: 10}}>
          {children}
          <TextIcon
            containerStyle={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            textStyle={{
              fontFamily: typography.primary,
              fontSize: 16,
              lineHeight: 43,
              color: "#2e3192"
            }}
            title={"همه"}
            iconName={"productArrowLeft"}
            iconStyle={{marginHorizontal: 20}}
          />
          <Divider style={{
            marginVertical: 10,
            marginHorizontal: 10,
          }}/>
          <TextIcon
            containerStyle={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            textStyle={{
              fontFamily: typography.primary,
              fontSize: 16,
              lineHeight: 43,
              color: "#2e3192"
            }}
            title={"محصولات تخفیف دار"}
            iconName={"productArrowLeft"}
            iconStyle={{marginHorizontal: 20}}
          />
          <Divider style={{
            marginVertical: 10,
            marginHorizontal: 10,
          }}/>
          <TextIcon
            containerStyle={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            textStyle={{
              fontFamily: typography.primary,
              fontSize: 16,
              lineHeight: 43,
              color: "#2e3192"
            }}
            title={"شگفت انگیزهای روز"}
            iconName={"productArrowLeft"}
            iconStyle={{marginHorizontal: 20}}
          />
          <Divider style={{
            marginVertical: 10,
            marginHorizontal: 10,
          }}/>
        </CollapseBody>
      </Collapse>
    </View>
  )
}
export default CollapseUI;