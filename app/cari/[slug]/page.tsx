import React, { Suspense } from "react";
import Repolist from "./sectionRepository";

async function getData(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

async function getDatalimit(param: string) {
  const res = await fetch(` https://api.github.com/rate_limit`);
  return res.json();
}

export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  const dataUser = await getData(params.slug);
  const dataLimit = await getDatalimit(params.slug);

  return (
    <div>
      Detail User: {params.slug}
      <div>{JSON.stringify(dataUser)}</div>
      <div style={{ marginTop: "10px" }}>
        <Suspense fallback={<>Sedang Mengambil Repository .....</>}>
          <Repolist slug={params.slug} />
        </Suspense>
      </div>
      <p>Limit</p>
      <div>{JSON.stringify(dataLimit)}</div>
    </div>
  );
}
