import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginButton } from "../../components/button/Button";
import { Input } from "../../components/Input/Input";
import {loginUser, userSelector, clearState } from "../../redux/features/UserSlice";
import styles from "./LoginForm.module.css";


export const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const { isSuccess, isError, errorMessage } = useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  

  return (
    <div className={styles.formContainer}>
      <div className={styles.formText}>
        <h2>Log In</h2>
        <Typography className={styles.textDescription}>
          Enter your email & Password. If you don't have an account please see
          your email invitation
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="submit" id="email" name="email" label="email">
          EMAIL
        </Input>
        <Input id="password" name="password" label="password">
          PASSWORD
        </Input>
        <div className={styles.submitButton}>
        <LoginButton>Login</LoginButton>
        </div>
            </form>
    </div>
  );
};
