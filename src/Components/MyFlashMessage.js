import React from "react"
import FlashMessage from "react-native-flash-message"
import { lineHeights, sizes } from "../Theme/Fonts"

const MyFlashMessage = ({ innerRef, ...rest }) => {
  return (
    <FlashMessage
      {...(innerRef && { ref: innerRef })}
      position="bottom"
      textStyle={{
        textAlign: "left",
        fontSize: sizes.h5,
        //fontFamily: Fonts.OpenSans,
        lineHeight: lineHeights.h5
      }}
      titleStyle={{
        textAlign: "left",
        fontSize: sizes.h4,
        //fontFamily: Fonts.OpenSans,
        lineHeight: lineHeights.h4
      }}
      {...rest}
    />
  )
}

export default MyFlashMessage
