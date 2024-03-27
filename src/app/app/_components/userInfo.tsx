'use client'
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type UserProps = {
    user: Session['user']
}

export function UserInfo({ user }: UserProps){
    return(
        <>
        <h2>{user?.email}</h2>
        <Button variant="outline" onClick={() => signOut()}>Sair</Button>
        </>
    )
}