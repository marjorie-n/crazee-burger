import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import { FiCheck } from "react-icons/fi";

export default function SubmitMessage() {
    return (
        <SubmitMessageStyled>
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succés</span>
        </SubmitMessageStyled>
    )
}
const SubmitMessageStyled = styled.div`
      // border: 2px solid pink;
      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 1px solid ${theme.colors.success};
        vertical-align: middle;
      }
      .message {
        color: ${theme.colors.success};
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
      }
    }
  }

  
`;
