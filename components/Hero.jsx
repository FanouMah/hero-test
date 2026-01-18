import Image from "next/image";
import { FaArrowDown, FaCalendarAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="mb-4 inline-block w-full sm:w-auto">
                        <div className="relative flex items-center gap-3 rounded-full border border-[#1C1C1C]/20 bg-[#FFFFFF] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5">
                            <Image
                                src="/2_Logo_Bulle.png"
                                alt="Web Difference loupe"
                                width={48}
                                height={48}
                                className="h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14"
                            />
                            <p className="text-sm font-extrabold text-[#1C1C1C] overflow-hidden text-ellipsis whitespace-nowrap sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                                Créer un site web <span class="underline decoration-3 underline-offset-4 decoration-[#1C1C1C]">vraiment</span> unique
                            </p>
                        </div>
                    </div>
                    <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">Votre <span className="text-[#71DDAE]">site</span> doit <span className="text-[#71DDAE]">donner envie</span> de <span className="text-[#71DDAE]">rester</span>, pas de <span className="line-through decoration-[#1C1C1C]"><span className="text-[#71DDAE]">revenir</span> <span className="text-white">en</span> <span className="text-[#71DDAE]">arrière</span></span>.</h1>
                    <p className="max-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl">Design moderne, <br className="sm:hidden" />  SEO solide, Suivi complet :<br />  on construit un site qui retient vos visiteurs et vous apporte des résultats.</p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                        <div className="relative w-full sm:w-auto sm:inline-flex">
                            <a className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#71DDAE] to-[#2A9D7A] px-6 py-3 text-lg font-extrabold tracking-wide text-[#1C1C1C] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 h-12 whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:px-8 md:py-4 md:text-2xl md:h-[68px]" href="" target="_blank" rel="noopener noreferrer">
                                <FaCalendarAlt  /> Prendre RDV
                            </a>
                            <div className="absolute top-full -left-12 -mt-4 pointer-events-none hidden sm:block">
                                <Image
                                    src="/3_Un_Ptit_Click.png"
                                    alt="Un ptit click ?"
                                    width={200}
                                    height={150}
                                    className="w-auto h-auto max-w-[200px]"
                                />
                            </div>
                        </div>
                        <a href="" className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#71DDAE] bg-[#1C1C1C]/50 backdrop-blur px-6 py-3 text-base font-extrabold tracking-wide text-[#71DDAE] transition-all duration-200 hover:bg-[#1C1C1C]/70 h-12 sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:h-[68px]">
                        Découvrir nos projets <FaArrowDown className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}