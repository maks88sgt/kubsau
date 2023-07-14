import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function IconButton() {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "6px",
                },
            },
        },
    };
}
