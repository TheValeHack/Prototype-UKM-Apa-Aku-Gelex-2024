import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function StartQuizBox(){
    return (
        <div className="bg-white p-10 rounded-xl min-w-[100%] flex flex-col justify-center items-center md:min-w-[30%]  drop-shadow-xl">
            <Image 
            className="mb-5"
            width={50}
            height={50}
            alt="gelex logo" 
            src={'https://ukm.ugm.ac.id/2023/gelex/_next/static/media/leaf_desk.f2309a67.svg'} 
            />
            <h1 className="text-2xl font-bold">UKM Apa Aku?</h1>
            <p className="mt-2 text-slate-400">Cari tau UKM apa yang cocok untukmu dengan mengerjakan quiz ini!</p>
            <Link href={'/quiz'}>
                <button className="font-semibold mt-6 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                    Mulai
                    <FontAwesomeIcon className="size-5 ml-5" icon={faArrowRight} />
                </button>
            </Link>
        </div>
    )
}