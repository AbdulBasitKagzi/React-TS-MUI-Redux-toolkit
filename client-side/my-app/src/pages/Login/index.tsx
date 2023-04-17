import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DescriptionAlerts from '../../components/Alert';
import { userActions } from '../../store/user/user.slice';
import formik, { useFormik } from 'formik';
import * as Yup from 'yup';
// mui imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GuestGuard from '../../routes/GuestGuard';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [userCredentials, setUserCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: ''
  });
  let empty: boolean | undefined = undefined;
  const [alert, setAlert] = useState<boolean>(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Please enter your email address.'),
      password: Yup.string()
        .min(6, 'Password should be six or more then six characters long.')
        .required('Password is required.')
    }),
    onSubmit: values => {
      setUserCredentials(prev => ({
        ...prev,
        ...values
      }));
      dispatch(userActions.login({ userCredentials }));
    },
    validateOnBlur: true
  });

  return (
    <GuestGuard>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <Box
                sx={{
                  background: '#f44336',
                  color: '#fff',
                  borderRadius: '8px',
                  p: 1
                }}>
                {formik.errors.email}
              </Box>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <Box
                sx={{
                  background: '#f44336',
                  color: '#fff',
                  borderRadius: '8px',
                  p: 1
                }}>
                {formik.errors.password}
              </Box>
            ) : null}
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2', color: '#fff', fontWeight: 500 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </GuestGuard>
  );
}
