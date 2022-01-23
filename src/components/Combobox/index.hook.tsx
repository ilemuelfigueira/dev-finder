import { useState } from "react";

import { useFormik } from "formik";
import * as querystring from "querystring";
import * as yup from "yup";

import { searchGitUsers } from "services/api";

import { GitUser } from "./index.types";

export function useCombobox() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<GitUser[]>([]);

  const validationSchema = yup.object().shape({
    q: yup.string().required("Search is required"),
    per_page: yup.number().required("Per page is required"),
  });

  const formik = useFormik({
    initialValues: {
      q: "",
      per_page: 10,
    },
    validationSchema,
    onSubmit: search,
  });

  async function search(values: { q: string; per_page: number }) {
    const gitUsers = await searchGitUsers(querystring.stringify(values));

    if (!gitUsers) throw new Error("Nenhum usuário encontrado");
    if (!gitUsers.items) throw new Error("Nenhum usuário encontrado");
    if (!gitUsers.items.length) throw new Error("Nenhum usuário encontrado");

    setOptions(gitUsers.items);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function onClickUser(url: string) {
    window.open(url, "_blank");
  }

  return {
    isOpen,
    formik,
    handleClose,
    onClickUser,
    options,
    search,
  };
}
