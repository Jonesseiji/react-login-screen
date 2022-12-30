import React from "react";
import { COLORS } from "../../constants/colors";
import { ICONS } from "../../constants/icons";
import { BUTTON_TEXT } from "../../constants/strings";
import { Button, Icon, LoaderIcon, Span } from "../Default/Defaults";

const CustomButton = ({
  text = BUTTON_TEXT.DEFAULT,
  onClick,
  disabled = false,
  background = "",
  icon = "",
  isLoading = false,
  color = "",
  defaultLight = false,
  isLink = false,
  fontSize = "",
  margin = "",
  paddingVertical = 13,
  paddingHorizontal = 32,
  border = null,
  borderRadius = 0,
}) => {
  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    background: background ? background : COLORS.BLUE,
    color: color ? color : COLORS.DEFAULT_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: paddingVertical,
    paddingBottom: paddingVertical,
    paddingLeft: paddingHorizontal,
    paddingRight: paddingHorizontal,
    borderRadius: borderRadius ? borderRadius : 100,
    border: border ? border : "none",
    fontWeight: 600,
    fontSize: fontSize ? fontSize : "16px",
    cursor: "pointer",
    margin: margin ? margin : 0,
  };

  if (disabled) {
    buttonStyle.opacity = 0.5;
    buttonStyle.cursor = "not-allowed";
  }

  if (defaultLight) {
    buttonStyle.background = COLORS.PRIMARY_ACCENT_COLOR;
    buttonStyle.color = color ? color : COLORS.DEFAULT_LIGHT;
  }

  return (
    <Button style={buttonStyle} onClick={disabled ? () => {} : onClick}>
      {isLoading ? (
        <LoaderIcon
          className={ICONS.LOADING}
          style={{
            fontSize: buttonStyle.fontSize,
            color: buttonStyle.color,
          }}
        ></LoaderIcon>
      ) : (
        <Span
          className={text}
          style={{
            fontSize: buttonStyle.fontSize,
            color: buttonStyle.color,
            textDecoration: isLink ? "underline" : "none",
          }}
        >
          {text}
        </Span>
      )}
      {icon && !isLoading && (
        <Icon
          className={icon}
          style={{
            marginLeft: 6,
            fontSize: buttonStyle.fontSize,
            color: buttonStyle.color,
          }}
        ></Icon>
      )}
    </Button>
  );
};

export default CustomButton;
