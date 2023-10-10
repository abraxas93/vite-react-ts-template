import { ReactNode, memo } from "react";

interface LoginFormProps {
  children?: ReactNode;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { children } = props;
  return (
    <form>
      {children}
    </form>
  )
})

