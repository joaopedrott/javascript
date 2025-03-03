import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px 16px 16px 5px;
  margin: 8px 8px 8px 0px;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  

  img {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    margin: 8px 8px 8px 8px
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  .player-count {
    color: green; /* Substitua 'red' pela cor que você desejar */
    font-weight: bold;
  }



`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: center;
    margin-top: 10px;

`

export const Thumbnail = styled.div`
    
    
`

