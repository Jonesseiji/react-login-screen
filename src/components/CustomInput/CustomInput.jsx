import { COLORS } from "../../constants/colors";
import Column from "../Column/Column";
import { Input, Label } from "../Default/Defaults";

const CustomInput = ({
  onChange = {},
  label = "",
  type = "",
  name = "",
  value,
  placeholder = "",
  inputFontSize = 0,
  inputFontWeight = 0,
  border = "",
  borderRadius = 0,
  inputColor = "",
  labelColor = "",
  labelFontSize = 0,
  labelFontWeight = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  width = 0 || "",
  maxWidth = 0 || "",
  labelTextAlign = "",
  rows = 3,
}) => {
  const Styles = {
    Input: {
      border: border ? border : `1px solid ${COLORS.GRAY_VARIANT_4}`,
      borderRadius: borderRadius ? borderRadius : 6,
      padding: 12,
      color: inputColor ? inputColor : COLORS.GRAY_VARIANT_1,
      fontSize: inputFontSize ? inputFontSize : 16,
      fontWeight: inputFontWeight ? inputFontWeight : 500,
    },
    Label: {
      color: labelColor ? labelColor : COLORS.DEFAULT_DARK,
      fontSize: labelFontSize ? labelFontSize : 14,
      fontWeight: labelFontWeight ? labelFontWeight : "bold",
      marginBottom: 4,
      marginLeft: 2,
      textAlign: labelTextAlign ? labelTextAlign : "start",
    },
  };
  return (
    <Column
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      width={width ? width : "100%"}
      maxWidth={maxWidth ? maxWidth : "100%"}
    >
      {label?.length >= 1 && <Label style={Styles.Label}>{label}</Label>}
      {type === "textarea" ? (
        <textarea
          style={Styles.Input}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          style={Styles.Input}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </Column>
  );
};

export default CustomInput;
