import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { colorButton } from "@/utils/color-vars";

const LoginBtn = () => {
  return (
    <Button
      className={`${colorButton} flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300`}
    >
      <UserIcon />
      <p>Войти</p>
    </Button>
  );
};
export default LoginBtn;
