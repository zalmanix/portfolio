export default function Footer(props) {
    const preview = props.content.slice(0, 200)

    return (
            <div className="shadow-md border-opacity-50 rounded-md p-6 bg-white dark:bg-black">
                <h1 className="text-center border-l-8 border-transparent font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                    {props.head}
                </h1>
                <div>
                    <img src={props.path} className="rounded-lg"/>
                </div>
                <p className="pt-5">
                    {preview}
                    ...
                </p>
            </div>
    );
}