"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const OnClick = () => {
    router.push("/auth/login");
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button onClick={OnClick} size="lg" color="primary">
        Iniciar sesión
      </Button>
    </main>
  );
}
