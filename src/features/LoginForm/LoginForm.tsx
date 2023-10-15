import addClasses from "../../shared/lib/addClasses";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { VStack } from "../../shared/ui/Stack/VStack";
import { memo } from "react";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {

  return (
    <VStack className={addClasses('', {}, [className])}>
      <Input autofocus
        type="text" />
      <Input autofocus
        type="text" />
      <Button />
    </VStack>
  )
})

export default LoginForm;