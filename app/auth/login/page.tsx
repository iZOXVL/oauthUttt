import SocialButtons from "@/components/auth/social";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";



const LoginPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Card className="max-w-[400px] dark">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">OAuth 2.0</p>
                        <p className="text-small text-default-500">Servicio de autenticacion</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <SocialButtons />
                </CardBody>
                <Divider />
                <CardFooter>
                    <p>Hecho con ❤️</p>
                </CardFooter>
            </Card>
        </main>
    );
}

export default LoginPage;