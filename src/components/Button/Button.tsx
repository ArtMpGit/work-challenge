import styled from 'styled-components';

const Button = styled.button<{ theme: string }> `
    background: ${({ theme }) => {
        switch (theme) {
            case 'light':
                return 'white';
            case 'secondary':
                return '#E4E4ED';
            default:
                return '#191920';
        }
    }};
    padding: 14px 0;
    height: 40px;
    width: 290px;
    border-radius: 20px;
    font-family: Roboto;
    border: ${({ theme }) => (theme === 'light' ? '1px solid black' : 'none')};
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;

    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    text-transform: uppercase;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default Button;