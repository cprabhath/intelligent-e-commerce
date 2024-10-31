import { BsCheck2Circle  } from "react-icons/bs";

interface FormSucessProps {
  message: string | undefined;
}

export const FormSucess = ({ message }: FormSucessProps ) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald mb-2">
      <BsCheck2Circle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
