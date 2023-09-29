import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme/index.js';

export default function EditInfoMessage() {
    return (<EditInfoMessageStyled className="sentence">
        Cliquer sur un produit du menu pour le modifier{' '}
        <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
    )
}
const EditInfoMessageStyled = styled.span`
.sentence {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.M};
    .live-update {
      text-decoration: underline;
      color: ${theme.colors.green};    
    }
  }
  
`;
