export default function Custom404() {
    return (
        <>
            <div>
            </div>
            <div className="container flex items-center p-4 mx-auto min-h-screen justify-center font-mono">
                <div>
                    <h1 className="text-center text-4xl code"><span className="text-light-link-blue">404 </span><span>This Page Doesn't Exist,</span></h1>
                    <h2 className="text-center text-3xl text-gray-dark dark:text-gray-light mb-10">you silly goose!</h2>
                    <a href="/">
                        <div className="justify-center bg-transparent font-semibold py-2 px-4 border rounded">
                            <p className="text-xl text-black dark:text-white text-center">Return Home</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
