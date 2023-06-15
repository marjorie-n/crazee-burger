import styled from "styled-components";

export default function Tabs({ Icon }) {
  return (
    <TabsStyled>
      <div className="icon">{Icon}</div>
    </TabsStyled>
  );
}
const TabsStyled = styled.button`
  position: relative;
  height: 43px;
  left: 5%;
  top: 1px;
  padding: 0 22px;
  margin-left: 71px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #93a2b1;
  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;

  :hover {
    cursor: pointer;
    border-bottom: 2px white;
  }
  .icon {
    display: flex;
  }
`;
