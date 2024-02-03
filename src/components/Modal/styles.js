import styled from "@emotion/styled";
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSuccess = styled.button`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: #0d6efd;
  border-color: #0d6efd;
  margin-right: 10px;
  :hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
`;

export const ButtonCancel = styled(ButtonSuccess)`
  color: red;
  border-color: red;
  :hover {
    color: #fff;
    background-color: red;
    border-color: red;
  }
`;
