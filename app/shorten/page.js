"use client";

import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async ()=> {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shortUrl,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        alert(data.message);
      } else {
        alert(data.message);
      }
      setUrl("");
      setShortUrl("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please try again later.");
    }
    
    
  }

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-5 mt-4">
        <input
        value={url}
          onChange={e => setUrl(e.target.value)}
          className="p-4 focus:outline-purple-600"
          type="text"
          placeholder="Enter you Url "
        />
        <input
        value={shortUrl}
          onChange={e => setShortUrl(e.target.value)}
          className="p-4 focus:outline-purple-600"
          type="text"
          placeholder="Enter your preferred short url text"
        />
        <button 
        onClick={generate}
        className='bg-purple-500 shadow-lg rounded-lg px-5 py-2 hover:bg-purple-400 my-2 text-white'>Generate</button>
      </div>

      {
        generated && (
            <div className="bg-purple-200 p-4 rounded-lg mt-4">
              <h1 className="font-bold text-xl">Your Short URL</h1>
              <code>
              <Link href={generated} target="_blank" className="text-purple-500">{generated}</Link>
              </code>
              
            </div>
        )
      }
    </div>
  );
};

export default Shorten;
