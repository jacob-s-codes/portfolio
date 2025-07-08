export default function NotFound() {
    return (
        <div className="mt-24 text-center flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-4xl font-bold max-w-xl px-2">The page you&apos;re looking for can&apos;t be found.</h1>
            <p className="text-lg mt-4">If you think this is a mistake, please contact <a href="mailto:jacobbshaul@gmail.com" className="text-blue-600 underline">jacobbshaul@gmail.com</a>.</p>
        </div>
    );
}