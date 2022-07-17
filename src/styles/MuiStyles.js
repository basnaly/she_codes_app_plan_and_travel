import { Box, Button } from '@mui/material';
import { styled } from "@mui/material";

export const cityStyle = {
    color: 'forestgreen',
    fontSize: '26px',
}

export const AddButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

export const CityTitleStyled = styled('div')({
    fontFamily: "'Aladin', cursive",
    color: 'forestgreen',
    fontSize: '30px',
    marginTop: '-15px',
    textTransform: 'capitalize',
    textShadow: '1px 1px black', 
});

export const YellowButton = styled(Button)({
    textTransform: 'none',
    color: 'yellow',
    border: '1px solid yellow',
    fontSize: '22px',
    backgroundColor: "transparent",
    padding: '0 10px',
    fontFamily: 'Aladin',
})

export const GreenButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

export const RedButton = styled(Button)({
    textTransform: 'none',
    color: 'red',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

export const HeaderBox = styled(Box)({
    borderBottom: 1,
    borderColor: 'divider',
    backgroundColor: 'khaki',
    boxShadow: 24,
})

export const TabContentBox = styled(Box) ({
    marginTop: '10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    border: '2px solid forestgreen',
    backgroundColor: '#ffffff60',
    borderRadius: "10px",
    fontFamily: "'Aladin', cursive",
    fontSize: '22px',
})

export const FooterLink = styled('a') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '26px',
    textDecoration: 'underline',
    color: 'yellow',
})

export const FooterText = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '26px',
    color: 'yellow',
})

export const PeriodTitle = styled(CityTitleStyled) ({
    fontSize: '30px',
    marginTop: '-10px',
    textTransform: 'none',
    
})