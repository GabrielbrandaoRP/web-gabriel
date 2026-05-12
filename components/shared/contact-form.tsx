/* eslint-disable react-hooks/static-components */
"use client";

import { useState } from "react";
type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};
export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("../../app/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      alert("Email enviado!");
    } else {
      alert("Erro ao enviar email");
    }

    setLoading(false);
  }

  function MinimalInput({ label, type, placeholder }: InputProps) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-gray-700">{label}</label>
        <input
        
          type={type}
          placeholder={placeholder}
          className="border-b border-gray-300 bg-transparent pb-3
          placeholder:text-gray-400 focus:outline-none
          focus:border-black transition-colors"
        />
      </div>
    )
  }
  
  return (
    <section className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-100">
        <div className="flex gap-2">
          <MinimalInput label="NOME" type="text" placeholder="Seu nome" />
          <MinimalInput label="EMAIL" type="email" placeholder="seuemail@email.com" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700">MENSAGEM</label>
        <textarea
          name="message"
          placeholder="Mensagem"
          className="border-b border-gray-300 bg-transparent pb-3 h-40 resize-none"
        />
          
        </div>

        <button
          disabled={loading}
          className="
          bg-black text-white
          rounded-lg
          p-3
        "
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
