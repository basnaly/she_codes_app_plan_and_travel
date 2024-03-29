
import { createTheme } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';

export const myTheme = createTheme({
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
                root: {
                    "&.MuiOutlinedInput-root .MuiAutocomplete-input": {
                        width: 'auto',
                    }
                },
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
        MuiMenu: {
            styleOverrides: {
                list: {
                    backgroundColor: 'lightgray',

                },
                option: {
                    ".Mui-focused, &:hover": {
                        border: '1px solid khaki',
                    },
                },
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
                        textTransform: 'capitalize',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: "space-between",
                },
                indicator: {
                    backgroundColor: 'transparent',
                }
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
                    width: 'auto'
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
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '18px',
                    textTransform: 'capitalize',
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root:{
                    position: "fixed",
                    right: '4px',
                    top: '4.1rem',
                    zIndex: 1,
                },
                message: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '20px',
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '16px',
                    marginTop: 0,
                    color: 'yellow',
                    backgroundColor: 'lightslategray',
                    padding: '4px 10px',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '18px',
                    backgroundColor: 'lightgray',
                    border: '1px solid forestgreen',
                    borderTop: '0',
                    "&:first-of-type": {
                        borderTop: '1px solid forestgreen',
                    },
                    "&&.Mui-selected": {
                        backgroundColor: 'palegoldenrod',
                    },   
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
                    }, "&&&:hover .Mui-selected, &&&:focus .Mui-selected": {
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
                    "& .PrivatePickersYear-yearButton:hover, & .PrivatePickersYear-yearButton:focus": {
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

