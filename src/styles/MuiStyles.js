import { Button, Box } from '@mui/material';
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";

export const cityStyle = {
    color: 'forestgreen',
    fontSize: '26px',
}

export const Main = styled('div')({
    '&::after': {
        content: '""',
        backgroundImage: "url('/img/map.webp')",
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100vw',
        zIndex: '-1',
    }
})

export const CityTitleStyled = styled('div')({
    fontFamily: "'Aladin', cursive",
    color: 'forestgreen',
    fontSize: '30px',
    marginTop: '-15px',
    textTransform: 'capitalize',
    textShadow: '1px 1px black', 
});

export const PreLoginStyled = styled('div')({
    fontFamily: "'Aladin', cursive",
    fontSize: '30px',
    marginTop: '-10px',
});

export const PalmStyled = styled('div')({
    fontSize: '50px',
    margin: '10px 10px 0 10px',
    textShadow: '1px 1px black',
});

export const LinkStyled = styled('a')({
    fontSize: '26px',
    color: 'forestgreen',
});

export const CityStyled = styled('span')({
    padding: '10px',
    fontSize: '30px',
    fontWeight: 'bold',
});

export const HeaderStyled = styled('div')({
    backgroundColor: 'lightslategrey',
    height: '4rem',
});

export const IconStyled = styled('div')({
    position: 'relative',
    top: '-30px',
    height: '30px',
    fontSize: '60px',
    marginLeft: '10px',
});

export const LinkHoverStyled = styled(Link)({
    fontFamily: "'Aladin', cursive",
    fontSize: '40px',
    color: 'yellow',
    padding: '20px',
    textDecoration: 'none',

    "&:hover": {
        color: 'lightgreen',
    }
});

export const AuthLinkStyled = styled(Link)({
    fontFamily: "'Aladin', cursive",
    fontSize: '24px',
    color: 'yellow',
    padding: '5px 10px',
    textDecoration: 'none',
    border: '1px solid yellow',
    borderRadius: '5px',

    "&:hover": {
        color: 'lightgreen',
        outline: '1px solid lightgreen',
        border: '1px solid transparent',
    }
});

export const MeStyled = styled('img')({
    height: '50px',
});

export const ErrorStyled = styled('div')({
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bold',
});

export const NoTripStyled = styled('div')({
    fontFamily: "'Aladin', cursive",
    color: 'forestgreen',
    fontSize: '40px',
    margin: '20px',
    textShadow: '1px 1px black', 
});

export const PeriodView = styled('div')({
    fontFamily: "'Aladin', cursive",
    fontSize: '26px',
    color: 'forestgreen',
    fontWeight: 'bold',
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

export const GrayButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '18px',
    backgroundColor: "lightgray",
    padding: '0 5px',
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
    marginBottom: '10px',
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

export const TotalView = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '26px',
    color: 'forestgreen',
})

export const FilterView = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '22px',
})

export const AmountView = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '24px',
})

export const CategoryTitle = styled('div') ({
    fontSize: '26px',
    textDecoration: 'underline',
})

export const Footer = styled('div') ({
    backgroundColor: 'lightslategrey',
    height: '4rem',
    width: '100vw',
})

export const NoteChecked = styled('div') ({
    textDecoration: 'line-through',
    color: 'gray',
    padding: '0 10px',
})

export const NoteNotChecked = styled('div') ({
    padding: '0 10px',
})

export const MapStyled = styled('span') ({
    border: '1px solid black',
})

export const TextareaAutosizeStyled = styled(TextareaAutosize)({
    fontFamily: "'Aladin', cursive",
    fontSize: '22px',
    color: 'black',
    backgroundColor: '#fff6',

    "&:focus, &:hover, &:focus-visible": {
        outlineColor: 'forestgreen',
    }
});

export const NumberViewStyled = styled('div') ({
    color: 'forestgreen',
})

export const HrStyled = styled('hr') ({
    color: 'gray',
})

export const CaptionView = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '20px',
    color: 'gray',
    marginBottom: '10px'
})

export const ViewStyled = styled('div') ({
    fontFamily: "'Aladin', cursive",
    fontSize: '24px',   
})

export const CategoryStyled = styled('div') ({
    fontWeight: 'bold',
    textDecoration: 'underline', 
    textTransform: 'capitalize',
})

export const AccountCircleIconStyled = styled(AccountCircleIcon)({
    fontSize: '40px',
    color: 'yellow',  
});

export const PaperStyled = styled(Paper)({
    '&::before': {
        content: '""',
        backgroundImage: "url('/img/map.webp')",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        borderRadius: '10px',
    },
    '&::after': {
        content: '""',
        backgroundColor: '#fff6',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        borderRadius: '10px',
    },
    zIndex: 1,
    position: 'relative',
    fontFamily: "'Aladin', cursive",  
    border: '2px solid forestgreen',
    borderRadius: '10px',
});

export const TimeStyled = styled('div') ({
    fontSize: '22px',
    color: "forestgreen",
})

export const UserStyled = styled('div') ({
    fontSize: '30px',
    textShadow: '1px 1px black',
    color: "yellow", 
})

export const UserMenuStyled = styled('div') ({
    fontSize: '22px',
    color: "forestgreen",
    cursor: "pointer",
    '&:hover': {
        backgroundColor: "#fff6",
    }
})