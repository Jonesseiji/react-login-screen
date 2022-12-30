import styled, { css } from "styled-components";
import { flexbox, space, layout, color, border, position } from "styled-system";
import propTypes from "@styled-system/prop-types";

const Row = styled.div(
  css`
    display: flex;
    ${({ animation }) => (animation ? animation : "")};
  `,
  flexbox,
  space,
  layout,
  color,
  border,
  position
);

Row.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.position,
};

export const RowDesktop = styled(Row)`
  display: none;
`;

export const RowMobile = styled(Row)`
  display: flex;
`;

export default Row;