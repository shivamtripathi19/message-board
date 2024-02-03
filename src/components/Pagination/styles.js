import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const PaginationSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PaginationItems = styled.div`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  padding: 10px;
`;

export const active = css`
  font-weight: 900;
  background: #ffe400;
  color: #101010;
`;

export const disable = css`
  opacity: 0;
`;
