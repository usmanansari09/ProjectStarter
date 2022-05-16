import React from "react"
import { Wrapper, Input, Icon, Loginlabel } from "./styles"
import { Colors } from "../../Theme"

const InputField = ({ ...props }) => {
  return (
    <>
      <Loginlabel>{props.label}</Loginlabel>
      <Wrapper
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 1,
          ...props.inputContainerStyle
        }}
      >
        {props.icon && <Icon source={props.icon} iconStyle={props.iconStyle} />}
        <Input placeholderTextColor={Colors.themeGreyText} {...props} />
      </Wrapper>
    </>
  )
}

export default InputField