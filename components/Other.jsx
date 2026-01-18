import Image from "next/image";

export default function Other() {
    return (
        <section className="border-t border-white/10 bg-[color:var(--color-background-strong)] py-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
                <div className="flex flex-col gap-2 text-center">
                    <div className="flex justify-center mb-2">
                        <Image
                            alt="Mais où est la différence ?"
                            src="/ouestladiffrence.avif"
                            width={450}
                            height={300}
                        /> 
                    </div>
                </div>
            </div>
        </section>
    );
}