
import { createTheme } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';

export const myTheme = createTheme({
    palette: {
        neutral: {
            main: 'transparent',
            contrastText: '#fff',
        },
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'antiquewhite',
                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    fontSize: '24px',
                    color: 'black',
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    margin: 0,
                    paddingRight: 3
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '20px',
                    color: 'black',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '30px',
                    marginTop: '-10px',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '20px',
                    color: 'black',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    color: 'forestgreen',
                },
                multiline: {
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'purple',
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '24px',
                    color: 'khaki',
                    backgroundColor: 'lightslategray',
                    border: '1px solid khaki',
                },
                option: {
                    ".Mui-focused, &:hover": {
                        border: '1px solid khaki',
                    },
                },
                clearIndicator: {
                    color: 'forestgreen',
                    "&.MuiIconButton-sizeMedium": {
                        margin: 0,
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '24px',
                    color: 'black',
                    textTransform: 'none',
                    "&.Mui-selected": {
                        color: 'forestgreen',
                        textDecoration: 'underline',
                    },
                    "&.Mui-disabled": {
                        color: 'forestgreen',
                        textShadow: '1px 1px black',
                        fontSize: '26px',
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeMedium: {

                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: "space-between",
                },
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: 'forestgreen',
                    [`&.${checkboxClasses.checked}`]: {
                        color: 'forestgreen',
                    },
                },
            },
        },
        // MuiTable:{
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: 'lightgray',
        //             border: '1px solid white',
                    
        //         }
        //     }
        // },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderColor: 'gray',
                },
                columnHeader: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '24px',   
                },
                cellContent: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '22px',
                },
                main: {
                    overflow: 'unset',
                    width:'auto'
                },
                filterForm: {
                    backgroundColor: 'lightgray',
                    border: '1px solid khaki',
                },
                iconSeparator: {
                    color: 'gray'
                },
                columnHeaders: {
                    borderColor: 'gray',
                },
                cell: {
                    borderColor: 'lightgray',
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'forestgreen',
                    fontFamily: 'Aladin, cursive',
                    fontSize: '18px',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '18px',
                    backgroundColor: 'lightgray',
                    border: '1px solid khaki',
                }
            }
        },
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '18px',
                    color: 'khaki',
                    backgroundColor: 'lightslategray',
                    border: '1px solid khaki',
                    "& .PrivatePickersFadeTransitionGroup-root": {
                        fontFamily: 'Aladin, cursive',
                    },
                    "& .MuiButtonBase-root": {
                        fontFamily: 'Aladin, cursive',
                        backgroundColor: 'khaki',
                    }, 
                    "&& .Mui-selected": {
                        color: 'red',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        backgroundColor: 'khaki',
                    },"& .Mui-selected:hover, & .Mui-selected:focus": {

                        border: '1px solid khaki',
                    },
                    "& .MuiTypography-root": {
                        fontSize: '20px',
                        color: 'khaki',
                        fontWeight: 'bold',
                        textTransform: 'lowercase',
                    },
                    "& .PrivatePickersYear-yearButton": {
                        fontFamily: 'Aladin, cursive',
                    }, 
                    "& .PrivatePickersYear-yearButton:hover, & .PrivatePickersYear-yearButton:focus" : {
                        backgroundColor: 'khaki',
                    },
                    "& .PrivatePickersYear-yearButton:hover, .MuiPickersDay-root:hover": {
                        border: '1px solid khaki',
                        backgroundColor: 'transparent',
                    },
                }
                
            }
        }
    }
});

