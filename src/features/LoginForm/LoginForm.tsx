import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { VStack } from "@/shared/ui/Stack/VStack";
import { ReactNode, memo } from "react";

interface LoginFormProps {
  children?: ReactNode;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { children } = props;
  return (
    <VStack>
      <Input />
      <Input />
      <Button />
    </VStack>
  )
})

