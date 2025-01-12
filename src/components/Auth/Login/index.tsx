import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextInput from '../../Primitives/TextInput';
import { useForm } from 'react-hook-form';
import Spinner from '../../Primitives/Spinner';
import { connect } from 'react-redux';
import { loginHospital } from '../../../store/hospital/action';
import Logo from '../../../assets/logo/logo.png';
import { hospitalLogIn } from '../../../interface/auth.interface';

const Login = (props: any) => {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm<hospitalLogIn>();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const { loginHospital } = props;
    const { loading } = props.hospital;

    async function signUp(values: hospitalLogIn) {
      //  console.log(values);
      try{
        loginHospital(values);
      } catch(error) {
        console.log(error)
      }
    };


    return(
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.logoWrap}>
                  <img src={Logo} alt="logo" className={classes.logo}/>
                </div>
                <Link to='/' className={classes.back}>
                  Back Home
                </Link>
            </div>
           <div className={classes.loginUpWrapper}>
           <Paper elevation={5} className={classes.paperStyle}>
                <Grid>
                     <div className={classes.heading}>Login</div>
                     <div className={classes.subHeading}>Login to continue</div>
                </Grid>
                <Grid className={classes.inputWrapper}>
                  <form onSubmit={handleSubmit(signUp)}>
                     <TextInput 
                       id="email" 
                       placeholder='Email'
                       type="email"
                       isInValid={!!errors.email}
                       validationMessage={errors.email?.message}
                       {...register('email', {
                           required: 'Email is required',
                           pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'}
                       })}
                       required
                     />
                      <TextInput 
                       id="password" 
                       placeholder='Password'
                       autocomplete="new-password"
                       type={passwordShown ? "text" : "password"}
                       togglePasswordVisiblity={togglePasswordVisiblity}
                       isInValid={!!errors.password}
                       validationMessage={errors.password?.message}
                       {...register('password', {
                           required: 'password is required',
                           min: {value: 5, message: 'password must be more than 5 letters'},
                           maxLength: {value: 8, message: 'password must be less than 8 letters'}
                       })}
                       required
                     />
                     <div className={classes.remember}>
                        <FormControlLabel control={
                           <Checkbox
                             name="checkedB"
                             color="primary"
                            />
                          }
                         label="Remember me"
                        />
                         <div className={classes.forget}>
                            Forget Password
                         </div>
                     </div>
                    <button className={classes.signUp} type="submit" disabled={loading}>
                        {loading ? <Spinner className={classes.spinner}/> : 'Login'}
                    </button>
                  </form>
                  <div className={classes.account}>
                    Don’t have an account? <a href='/sign-up' className={classes.accountspan}>Sign up?</a>
                  </div>
                </Grid>
          </Paper>
          </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    hospital: state.hospitalReducer
})

export default connect(mapStateToProps, { loginHospital })(Login)


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#E5E5E5",
  },
  top: {
    padding: '10px 30px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    '@media (min-width: 780px)': {
      padding: '20px 70px',
    }
  },
  logoWrap: {
    backgroundColor: "#FFFFFF",
    padding: '10px',
    borderRadius: "22px"
  },
  logo: {
    width: '35px'
  },
  back: {
    color: '#2C0085',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '20px',
    textDecoration: 'none'
  },
  loginUpWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
    paperStyle: {
      padding: '20px 10px',
      width: 500,
      textAlign: 'center',
      margin: '3rem 2rem 5rem',
      '@media (min-width: 780px)': {
        padding: '30px 10px',
        width: 400,
        margin: '1rem 1rem 3rem',
      }
    },
    heading: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '25px',
      color: '#444B62',
      '@media (min-width: 780px)': {
        fontSize: '35px',
      }
    },
    subHeading: {
      fontFamily: 'Nunito Sans',
      fontSize: '14px',
      fontWeight: 600,
      color: '#525A75',
      marginTop: '5px',
      '@media (min-width: 780px)': {
        fontSize: '18px',
      }
    }, 
    inputWrapper: {
      marginTop: '2rem',
      padding: '5px',
      '@media (min-width: 780px)': {
        marginTop: '2rem',
        padding: '10px',
      }
    },
    signUp: {
      width: '90%',
      borderRadius: '10px',
      backgroundColor: '#2C0085',
      padding: '10px',
      fontSize: '1rem',
      letterSpacing: '3px',
      marginTop: '1rem',
      cursor: 'pointer',
      color: '#ffffff',
      outline: "none",
      border: 'none',
      '@media (min-width: 780px)': {
        padding: '15px',
        width: '100%',
      }
    },
    spinner: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      color: '#ffffff'
    },
    account: {
      marginTop: "1.5rem",
      marginBottom: "1rem",
      fontFamily: 'Nunito Sans',
    },
    remember: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignContent: "center",
      margin: '0px 20px',
      '@media (min-width: 780px)': {
        flexDirection: "row",
        justifyContent: 'space-between',
      }
    },
    forget: {
      color: '#2C0085',
      marginTop: '8px'
    },
    accountspan: {
      color: '#2C0085',
      textDecoration: 'none'
    }
}));