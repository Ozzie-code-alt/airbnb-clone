"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Modak } from "next/font/google";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Modal from "./Modal";
import Heading from "../Heading";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Input from "../inputs/Input";


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setisLoading] = useState(false);

  const {
    // form control
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };


    const bodyContent = (<div className="flex flex-col gap-4">
      <Heading 
        title="Welcome to Airbnb"
        subtitle="Create an Account"
      /> 
      <Input/> 
    </div>)



  return <Modal 
  disabled={isLoading}
  isOpen={registerModal.isOpen}
  title="Register"
  actionLabel={"Continue"}
  onClose={registerModal.onClose}
  onSubmit={handleSubmit(onSubmit)}
  body={bodyContent}
  />;
};

export default RegisterModal;
