import { Link } from "react-router-dom";

interface INavButtonProps {
  path: string;
  message: string;
}

export function NavButton({ path, message }: INavButtonProps) {
  return (
    <div>
      <Link to={path}>{message}</Link>
    </div>
  );
}
