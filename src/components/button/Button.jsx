import Button from '@mui/material/Button';

export const LoginButton = ({children}) => {
    return <Button type="submit" disableRipple variant="contained">{children}</Button>
}