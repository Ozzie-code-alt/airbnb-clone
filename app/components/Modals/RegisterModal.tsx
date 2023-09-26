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
import {toast} from "react-hot-toast";
import Button from "../Button";


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

    axios.post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Error Lmao")
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
      <Input 
      id="email"
      label="Email"
      disabled={isLoading}
      errors={errors}
      register={register}
      required/> 
            <Input 
      id="name"
      label="Name"
      disabled={isLoading}
      errors={errors}
      register={register}
      required/> 
            <Input 
      id="password"
      label="password"
      disabled={isLoading}
      errors={errors}
      register={register}
      required/> 



    </div>)


    const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=>{}}/>
          <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=>{}}/>
          <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="justify-center flex flex-row items-center gap-2">
              <div>
                Already Have an account 
              </div>
              <div className="text-neutral-800 cursor-pointer hover:underline" onClick={registerModal.onClose}>
                Login
              </div>
            </div>
          </div>
      </div>

      
    )


  return <Modal 
  disabled={isLoading}
  isOpen={registerModal.isOpen}
  title="Register"
  actionLabel={"Continue"}
  onClose={registerModal.onClose}
  onSubmit={handleSubmit(onSubmit)}
  body={bodyContent}
  footer={footerContent}
  />;
};

export default RegisterModal;
