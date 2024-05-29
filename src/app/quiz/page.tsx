"use client"

import { dataPertanyaan, Pertanyaan, UKM } from "@/data/data"
import calculateHasil from "@/util/calculateHasil";
import { useState } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Quiz(){
    const [daftarJawaban, setDaftarJawaban] = useState<DaftarJawaban>({});
    const [currentQuestion, setCurrentQuestion] = useState<number>(1)
    const [message, setMessage] = useState<string>('')
    const [isDone, setIsDone] = useState<boolean>(false)
    const [rankingUKM, setRankingUKM] = useState<UKM[]>([])

    const handleChange = (questionId: number, jawabanTipe: string) => {
        setDaftarJawaban({
          ...daftarJawaban,
          [questionId]: jawabanTipe,
        })
      }
    const handleNext = () => {
        let question: Pertanyaan = dataPertanyaan[currentQuestion-1]
        if(daftarJawaban.hasOwnProperty(question.id)){
            if (currentQuestion < dataPertanyaan.length) {
                setMessage('')
                setCurrentQuestion(currentQuestion + 1)
            }
        } else {
            setMessage('Pilih salah satu jawaban!')
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1)
            setMessage('')
        }
    }
    const handleReset = () => {
        setDaftarJawaban({})
        setCurrentQuestion(1)
        setRankingUKM([])
        setIsDone(false)
    }

    const handleSubmit = () => {
        let question: Pertanyaan = dataPertanyaan[currentQuestion-1]
        if(daftarJawaban.hasOwnProperty(question.id)){
            if (currentQuestion === dataPertanyaan.length) {
                setMessage('')
                const hasilKalkulasi: UKM[] = calculateHasil(daftarJawaban)
                setRankingUKM(hasilKalkulasi)
                setIsDone(true)
            }
        } else {
            setMessage('Pilih salah satu jawaban!')
        }
    }

    return (
        <div className="w-[100%] min-h-[100vh] flex justify-center items-center px-10">
            <div className="bg-white p-10 rounded-xl w-[100%] md:w-[650px]  drop-shadow-xl">
                <div id="pertanyaan" className={isDone ? 'hidden' : 'block'}>
                    <p className="text-slate-500 mb-1 text-sm">Pertanyaan {currentQuestion}</p>
                    <p className="font-bold text-lg">{dataPertanyaan[currentQuestion-1].pertanyaan}</p>
                    <p className="text-red-600 text-sm mt-1">{message}</p>
                    {
                        dataPertanyaan[currentQuestion-1].jawaban[0].daftarJawaban.map((item, index) => {
                            const question: Pertanyaan = dataPertanyaan[currentQuestion-1]

                            return (
                                <div key={index} className={"border-2 mt-3 p-3 rounded-lg " + (daftarJawaban[question.id] === item.tipe ? 'border-[#ffb730]' : '')} onClick={() => handleChange(question.id, item.tipe)}>
                                    <label className="mr-2">
                                    <input
                                        className="mr-4"
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={item.tipe}
                                        checked={daftarJawaban[question.id] === item.tipe}
                                        onChange={() => handleChange(question.id, item.tipe)}
                                    />
                                    {item.tipe.charAt(0).toUpperCase() + item.tipe.slice(1)}
                                    </label>
                                </div>
                            )
                        })
                    }

                    <div className="flex justify-between">
                        {
                            currentQuestion > 1 ? (
                                <button onClick={handlePrevious} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                                Previous
                                </button>
                            ) : <div></div>
                        }
                        {currentQuestion < dataPertanyaan.length ? (
                            <button onClick={handleNext} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                            Next
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                            Submit
                            </button>
                        )}
                    </div>
                </div>
                <div id="hasil" className={isDone ? 'block' : 'hidden'}>
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
            </div>
        </div>
    )
}

type DaftarJawaban = { [key: number]: string }