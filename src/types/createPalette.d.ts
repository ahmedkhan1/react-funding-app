import * as createPalette from '@mui/core/styles/createPalette';
declare module '@mui/core/styles/createPalette' {
    interface TypeBackground {    
        gray?: string;
        warning?: string;
        hover: string;
        white: string;
    }
}