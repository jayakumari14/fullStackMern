"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formHandler = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/submit", { name, email });
      console.log("data submitted ");
    } catch (err) {
      console.log("error occured", err);
    }
  };
  return (
    <>
      <div>full-stack app</div>
      <form onSubmit={formHandler}>
        <input
          className="border-none"
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-400 px-5 py-2 rounded-md text-white"
        />
      </form>
    </>
  );
}
