import styled from "styled-components";
import { COLORS, GRADIENT_COLORS } from "../../constants/colors";
import Column from "../../components/Column/Column";
import { Span } from "../../components/Default/Defaults";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${GRADIENT_COLORS.LINEAR_BLUE};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const Overlay = styled.div`
  background: ${COLORS.DARK_OVERLAY};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
`;

export const BackgroundForm = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.DARK_OVERLAY_SECONDARY};
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  border-radius: 8px;
`;

export const ContainedForm = styled(Column)`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 90%;
  color: ${COLORS.DEFAULT_LIGHT};
`;

export const InputArea = styled.div`
  width: 100%;
  height: 100px;
`;

export const ErrorMessage = styled(Span)`
  color: ${COLORS.RED_PRIMARY};
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessMessage = styled(Span)`
  color: ${COLORS.GREEN_PRIMARY};
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ShowPasswordArea = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  border-radius: 0 6px 6px 0;
  height: 40px;
  background: ${COLORS.DEFAULT_LIGHT};
  cursor: pointer;
  color: inherit;
  position: absolute;
  right: 1.5px;
  bottom: 2px;
  &:hover {
    transition: 0.2s;
    background: ${COLORS.DARK_OVERLAY};
  }
`;