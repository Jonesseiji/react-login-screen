import React from "react";
import styled from "styled-components";
import Row from "../Row/Row";

const Column = React.forwardRef((props, ref) => (
  <Row style={{ flexDirection: "column" }} ref={ref} {...props} />
));

export const ColumnDesktop = styled(Column)`
  display: none;
`;

export const ColumnMobile = styled(Column)`
  display: flex;
`;

export default Column;