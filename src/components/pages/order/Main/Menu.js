import { useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme/index.js";
import Card from "../../../reusable-UI/Card.js";
import { formatPrice } from "../../../../utils/maths.js";

export default function Menu() {
  const [menu] = useState(fakeMenu.MEDIUM);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
