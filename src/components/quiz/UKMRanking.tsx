import { UKM } from "@/data/data"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function UKMRanking({ rankingUKM, handleReset }: {rankingUKM: UKM[], handleReset: () => void}){
    return (
        <div>
            <h1 className="text-lg font-bold text-center">Kamu paling cocok dengan UKM:</h1>
                <Image
                    className="mx-auto mt-3" 
                    width={160}
                    height={160}
                    alt="logo UKM"
                    src={rankingUKM.length > 0 ? rankingUKM[0].logo : ''}
                />
                <h1 className="text-2xl font-bold text-center mt-3">{rankingUKM.length > 0 ? rankingUKM[0].nama : ''}</h1>
                <p className="mt-4 text-justify text-slate-900">Berdasarkan analisa kami, kamu paling cocok dengan UKM {rankingUKM.length > 0 ? rankingUKM[0].nama : ''}! Kamu bisa kepoin sosial media mereka untuk tau lebih lanjut tentang UKM tersebut. Bukan cuma itu aja, berikut Top 3 UKM yang paling cocok denganmu berdasarkan analisa kami!</p>
                <table className="bg-white mt-5 border-collapse w-[100%] rounded-xl overflow-hidden">
                    <thead>
                        <tr>
                        <th className="bg-blue-50 border text-left px-6 py-3 w-[20px]">Rank</th>
                        <th  className="bg-blue-50 border text-left px-6 py-3">UKM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankingUKM.map((item, index) => {
                                if(index <= 2){
                                    return (
                                        <tr key={index}>
                                            <td className="border px-6 py-3 text-center">{index+1}</td>
                                            <td className="border px-6 py-3">{item.nama}</td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>  
                </table>
                <button onClick={handleReset} className="font-semibold mt-6 mx-auto px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                    Mulai ulang
                    <FontAwesomeIcon className="size-5 ml-5" icon={faArrowRight} />
                </button>
        </div>
    )
}