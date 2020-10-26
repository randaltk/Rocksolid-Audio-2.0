import styled from "styled-components";

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  background: rgb(181, 190, 184);
  background: linear-gradient(
    90deg,
    rgba(181, 190, 184, 1) 0%,
    rgba(96, 157, 96, 1) 35%
  );
  z-index: 10;
  width: 75vw;
  height: 55vh;
  right: 0;
  top: 5;
  padding: 5em;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  input {
    margin-top: 1em;
    border-radius: 3px;
    outline: none;
    border: none;
  }

  .label2 {
    margin-top: 1em;
  }
  .input2 {
    padding: 1em;
  }
  button {
    margin-top: 1em;
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 20%;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    }
  }
`;
