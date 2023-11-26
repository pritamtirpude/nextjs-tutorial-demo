"use client";

import { deleteTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

const SubmitBUtton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBUtton />
    </form>
  );
};

export default DeleteForm;
