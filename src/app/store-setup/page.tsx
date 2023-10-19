import StoreSetupForm from "./components/StoreSetupForm"
import SignOutButton from "./components/SignOutButton"

export default async function page(): Promise<JSX.Element> {
    return (
        <div className="container relative h-screen flex items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Create Your First Store
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Start selling online! Set up your store quickly and
                        easily to showcase your products and reach customers
                        worldwide. Create your first store now and boost your
                        online presence.
                    </p>
                </div>
                <StoreSetupForm />
                <SignOutButton />
            </div>
        </div>
    )
}
