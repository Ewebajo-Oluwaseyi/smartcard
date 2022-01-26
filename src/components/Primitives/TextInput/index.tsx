import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    id: string;
    isInValid?: boolean;
    validationMessage?: string;
    type: string,
    togglePasswordVisiblity?: () => void,
    autocomplete?: string
}
export default React.forwardRef<HTMLInputElement, TextInputProps> (
    function TextInput(props, ref) {
        const {id, isInValid, validationMessage, type, togglePasswordVisiblity,autocomplete, ...rest}  = props
        const classes = useStyles();
        const eye = <FontAwesomeIcon icon={faEye} />;

        return (
            <div className={classes.inputDiv}>
              <div className={classes.inputWrap}>
              <input
                id={id}
                type={type}
                {...rest}
                ref={ref}
                aria-invalid={isInValid}
                aria-describedby={`helper-text-for-${id}`}
                className={classes.input}
                autoComplete={autocomplete}
              />
                {id === "password" && 
                <i className={classes.eye} onClick={togglePasswordVisiblity}>{eye}</i>}
              </div>
              {validationMessage && (
                  <div className={classes.error}>
                      {validationMessage}
                  </div>
              )}
            </div>
        )
    }
)

const useStyles = makeStyles((theme) => ({
    inputDiv: {
      marginBottom: '20px',
    },
    inputWrap: {
      position: "relative",
      display: "flex",
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '10px',
        border: '2px solid #C4C4C4',
        fontFamily: 'Nunito Sans',
        '&:focus': {
          border: '2px solid #2C0085',
          outline: 'none'
        },
        '@media (min-width: 780px)': {
          padding: '15px',
          width: '90%',
        }
      },
      error: {
        color: 'red'
      },
      eye: {
        position: "absolute",
        top: "30%",
        right: "8%",
        "&:hover": {
          cursor: "pointer",
          color: "#2C0085"
        }
      }
}))