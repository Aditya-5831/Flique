import { View, Text, Pressable } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFormValues,
  signUpFormSchema,
} from "@/src/validations/auth.validation";
import { Mail, Signature, User, Lock } from "lucide-react-native";

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: SignUpFormValues) => {
    console.log(values);
  };

  return (
    <View className="w-full gap-5">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <View className="w-full flex-row items-center gap-2 rounded-lg border border-gray-300 pl-4">
            <Mail size={20} color={"gray"} />
            <TextInput
              textContentType="emailAddress"
              placeholder="Email"
              className="h-full w-full"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value, onBlur } }) => (
          <View className="w-full flex-row items-center gap-2 rounded-lg border border-gray-300 pl-4">
            <Signature size={20} color={"gray"} />
            <TextInput
              textContentType="name"
              placeholder="Full Name"
              className="h-full w-full"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value, onBlur } }) => (
          <View className="w-full flex-row items-center gap-2 rounded-lg border border-gray-300 pl-4">
            <User size={20} color={"gray"} />
            <TextInput
              textContentType="nickname"
              placeholder="Username"
              className="h-full w-full"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <View className="w-full flex-row items-center gap-2 rounded-lg border border-gray-300 pl-4">
            <Lock size={20} color={"gray"} />
            <TextInput
              textContentType="password"
              placeholder="Password"
              className="h-full w-full"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          </View>
        )}
      />

      <Pressable
        onPress={handleSubmit(onSubmit)}
        className="mt-5 w-full items-center justify-center rounded-lg bg-Primary/60 p-3"
      >
        <Text className="font-semibold text-white">Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
