import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Input } from '@material-ui/core';
import TextInput from '../../Primitives/TextInput';
import { useForm } from 'react-hook-form';
import Spinner from '../../Primitives/Spinner';
import { connect } from 'react-redux';
import { registerHospital } from '../../../store/hospital/action';
import Logo from '../../../assets/logo/logo.png';
import { hospitalReg } from '../../../interface/auth.interface';


const Signup = (props: any) => {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm<hospitalReg>();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const { registerHospital } = props;
    const { loading } = props.hospital;

    async function signUp(values: hospitalReg) {
      try{
        registerHospital(values);
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
           <div className={classes.signUpWrapper}>
           <Paper elevation={5} className={classes.paperStyle}>
                <Grid>
                     <div className={classes.heading}>Getting Started</div>
                     <div className={classes.subHeading}>Create an account to continue</div>
                </Grid>
                <Grid className={classes.inputWrapper}>
                  <form onSubmit={handleSubmit(signUp)}>
                     <TextInput 
                       id="name" 
                       placeholder='Name'
                       type="text"
                       isInValid={!!errors.name}
                       validationMessage={errors.name?.message}
                       {...register('name', {
                           required: 'Name is required',
                           maxLength: {value: 100, message: "name too long"}
                       })}
                       required
                     />
                     <TextInput 
                       id="address" 
                       placeholder='Address'
                       type="text"
                       isInValid={!!errors.address}
                       validationMessage={errors.address?.message}
                       {...register('address', {
                           required: 'Last Name is required',
                           maxLength: {value: 100, message: "name too long"}
                       })}
                       required
                     />
                     <TextInput 
                       id="domain" 
                       placeholder='Domain'
                       type="text"
                       isInValid={!!errors.domain}
                       validationMessage={errors.domain?.message}
                       {...register('domain', {
                           maxLength: {value: 100, message: "name too long"}
                       })}
                     />
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
                       id="phoneNumber" 
                       placeholder='Phone Number'
                       type="number"
                       isInValid={!!errors.phoneNumber}
                       validationMessage={errors.phoneNumber?.message}
                       {...register('phoneNumber', {
                           required: 'Phone Number is required'
                       })}
                       required
                     />
                      <TextInput 
                       id="hospital_reg" 
                       placeholder='Hospital Registration Number'
                       type="number"
                       isInValid={!!errors.hospital_reg}
                       validationMessage={errors.hospital_reg?.message}
                       {...register('hospital_reg', {
                           required: 'Hospital Registration is required'
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
                    <button className={classes.signUp} type="submit" disabled={loading}>
                        {loading ? <Spinner className={classes.spinner}/> : 'Register'}
                    </button>
                  </form>
                  <div className={classes.account}>
                  Already have an account?  <Link to='/login' className={classes.accountspan}>Sign in?</Link>
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

export default connect(mapStateToProps, { registerHospital })(Signup)


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
    signUpWrapper:{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
    paperStyle: {
      padding: '30px 10px',
      width: 400,
      textAlign: 'center',
      margin: '1rem 1rem 3rem',
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
      '@media (min-width: 780px)': {
        fontSize: '18px',
      }
    }, 
    inputWrapper: {
      marginTop: '1rem',
      padding: '5px',
      '@media (min-width: 780px)': {
        padding: '10px',
      }
    },
    signUp: {
      width: '100%',
      borderRadius: '10px',
      backgroundColor: '#2C0085',
      padding: '15px',
      fontSize: '1rem',
      letterSpacing: '3px',
      marginTop: '1rem',
      cursor: 'pointer',
      color: '#ffffff',
      outline: "none",
      border: 'none',
      '@media (min-width: 780px)': {
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
    accountspan: {
        color: '#2C0085',
        textDecoration: 'none'
      }
}));