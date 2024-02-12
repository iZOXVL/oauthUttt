import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src={JSON.stringify(session?.user.image?.toString)} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{JSON.stringify(session?.user.name)}</h4>
                            <h5 className="text-small tracking-tight text-default-400">{JSON.stringify(session?.user.email)}</h5>
                        </div>
                    </div>

                    <form action={async () => {
                        "use server";
                        await signOut();
                    }}>

                        <Button type="submit">Cerrar Session</Button>
                    </form>

                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        {JSON.stringify(session?.user.id)}
                    </p>

                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className=" text-default-400 text-small">Esta es tu session</p>
                    </div>

                </CardFooter>
            </Card>


        </main>
    );
}

export default SettingsPage;